"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PostListProps = {
  // posts: any;
  index?: number;
}

const PostList = ({ index }: PostListProps) => {
  const pathname = `/${usePathname().split("/")[1]}`;
  // '/', '/blog' 두 곳에서 보여주는 컴포넌트
  // '/'에서는 시간순으로 최신 5개만, '/blog'에서는 전체
  return (
    <div className="flex animate-in flex-col gap-8" style={{ "--index": index } as React.CSSProperties}>
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-bold text-2xl">
          {pathname === "/" ? "최근 글" : "전체 글"}
        </h2>
        {pathname === "/" && (
          <Link href="/blog" className="underline underline-offset-4 hover">
            See All
          </Link>
        )}
      </div>
      <div className="pb-4 border-b">
        <span className="text-sm text-[--primary]">태그</span>
        <h3 className="text-2xl font-semibold">글 제목</h3>
        <p className="text-sm text-gray-500">2024-01-31</p>
      </div>
      <div className="pb-4 border-b">
        <span className="text-sm text-[--primary]">태그</span>
        <h3 className="text-2xl font-semibold">글 제목</h3>
        <p className="text-sm text-gray-500">2024-01-31</p>
      </div>
      <div className="pb-4 border-b">
        <span className="text-sm text-[--primary]">태그</span>
        <h3 className="text-2xl font-semibold">글 제목</h3>
        <p className="text-sm text-gray-500">2024-01-31</p>
      </div>
      <div className="pb-4 border-b">
        <span className="text-sm text-[--primary]">태그</span>
        <h3 className="text-2xl font-semibold">글 제목</h3>
        <p className="text-sm text-gray-500">2024-01-31</p>
      </div>
      <div className="pb-4 border-b">
        <span className="text-sm text-[--primary]">태그</span>
        <h3 className="text-2xl font-semibold">글 제목</h3>
        <p className="text-sm text-gray-500">2024-01-31</p>
      </div>
    </div>
  );
};

export default PostList;
