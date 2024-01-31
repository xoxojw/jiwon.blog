"use client";

import Link from "next/link";

type PostListProps = {
  // posts: any;
  index: number;
}

const PostList = ({ index }: PostListProps) => {
  return (
    <div className="flex animate-in flex-col gap-8" style={{ "--index": index } as React.CSSProperties}>
      <h2 className="font-semibold text-2xl">최근 글</h2>
      <div className="pb-4 border-b">
        <span className="text-sm text-blue-500">태그</span>
        <h3 className="text-xl font-bold">글 제목</h3>
        <p className="text-sm text-gray-500">2024-01-31</p>
      </div>
      <div className="pb-4 border-b">
        <span className="text-sm text-blue-500">태그</span>
        <h3 className="text-xl font-bold">글 제목</h3>
        <p className="text-sm text-gray-500">2024-01-31</p>
      </div>
      <div className="pb-4 border-b">
        <span className="text-sm text-blue-500">태그</span>
        <h3 className="text-xl font-bold">글 제목</h3>
        <p className="text-sm text-gray-500">2024-01-31</p>
      </div>
      <Link href="/blog" className="underline underline-offset-4 hover">
        See All
      </Link>
    </div>
  );
};

export default PostList;
