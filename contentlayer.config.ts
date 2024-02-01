import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code"
//@ts-ignore

const prettyCodeOptions: PrettyCodeOptions = {
  theme: {
    light: "material-theme-lighter",
    dark: "catppuccin-frappe",
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("line-highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word-highlighted"];
  },
  keepBackground: true,
}

const getSlug = (post: any) => post._raw.sourceFileName.replace(/\.mdx$/, "");

const postComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (post) => getSlug(post),
  },
  url: {
    type: "string",
    resolve: (post) => post._raw.flattenedPath
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`,
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType:"mdx",
  filePathPattern: `blog/**/*.mdx`,
  fields: {
    title: { type: "string", required: true, },
    publishedAt: { type: "date", required: true, },
    summary: { type: "string", required: true },
    tags: { type: "json", required: true },
  },
  computedFields: postComputedFields,
}));

export default makeSource({
  contentDirPath: `src/contents`, // contentDirPath: mdx 파일 경로
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  },
});