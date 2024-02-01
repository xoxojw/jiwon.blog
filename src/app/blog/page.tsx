import PostList from "@/src/components/PostList";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

const BlogPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );
  return (
    <PostList posts={posts}  />
  );
};

export default BlogPage;
