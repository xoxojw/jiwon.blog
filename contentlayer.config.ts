import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line


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
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType:"mdx",
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
});