"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PostListProps = {
  // posts: any;
  index?: number;
}

const dummyData = [
  { tag: "react", title: "리액트란 무엇일까요?", date: "2024-01-31" },
  { tag: "nextjs tailwindcss", title: "Next.js에서 Tailwind-css 잘 사용하기", date: "2024-01-31" },
  { tag: "javascript react", title: "바닐라 자바스크립트 쓸 때와 리액트 쓸 때가 뭐가 다른데?", date: "2024-01-31" },
  { tag: "tag", title: "글 제목 글 제목 글 제목", date: "2024-01-31" },
  { tag: "tag", title: "글 제목", date: "2024-01-31" },
]

const PostList = ({ index }: PostListProps) => {
  const pathname = `/${usePathname().split("/")[1]}`;
  // '/', '/blog' 두 곳에서 보여주는 컴포넌트
  // '/'에서는 시간순으로 최신 5개만, '/blog'에서는 전체
  // 페이지네이션
  return (
    <div className="flex animate-in flex-col gap-8" style={{ "--index": index ? index : 0 } as React.CSSProperties}>
      <div className="flex items-center justify-between gap-3">
        <h2
          className="animate-in font-bold text-2xl"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          {pathname === "/" ? "최근 글" : "전체 글"}
        </h2>
        {pathname === "/" ? (
          <Link href="/blog" className="underline underline-offset-4 hover">
            See All
          </Link>
        ) : (
            <p>{dummyData.length} posts</p>
        )}
      </div>
      <ul
        className="animate-in flex flex-col gap-5"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        {dummyData.map((item, i) => (
          <li
            key={i}
            className="animate-in flex flex-col pb-4 border-b"
            style={{ "--index": 3+i } as React.CSSProperties}
          >
            <p className="text-sm text-primary">{item.tag}</p>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
