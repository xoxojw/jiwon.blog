import { Metadata } from "next";

import PostList from "@/src/components/PostList";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

export const metadata: Metadata = {
  title: "Posts | Jiwon Log",
  description: "Small steps are still progress, 공부한 것을 기록하고 보관하기 위한 곳 입니다.",
};

const BlogPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );
  return (
    <PostList posts={posts}  />
  );
};

export default BlogPage;
