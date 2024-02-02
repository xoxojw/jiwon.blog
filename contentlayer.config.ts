import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code"
//@ts-ignore

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
    resolve: (doc) => `/posts/${getSlug(doc)}/image.png`,
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType:"mdx",
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    title: { type: "string", required: true, },
    publishedAt: { type: "date", required: true, },
    summary: { type: "string", required: true },
    tags: { type: "json", required: true },
  },
  computedFields: postComputedFields,
}));

const prettyCodeOptions: PrettyCodeOptions = {
  theme: {
    light: "material-theme-lighter",
    dark: "material-theme-palenight",
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("line-highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word-highlighted"];
  },
  keepBackground: true,
}

export default makeSource({
  contentDirPath: `src/contents`, // contentDirPath: mdx 파일 경로
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  },
});