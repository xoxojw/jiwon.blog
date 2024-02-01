"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Post as PostType } from ".contentlayer/generated";
import PostCard from "./PostCard";

type PostListProps = {
  index?: number;
  posts: PostType[];
}

// "/"에서는 최근 글 5개, "/blog"에서는 전체 글을 리스트업
const PostList = ({ index, posts }: PostListProps) => {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <div
      className="flex animate-in flex-col gap-8"
      style={{ "--index": index ? index : 0 } as React.CSSProperties}>
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
          <p><span className="text-primary font-medium">{posts.length}</span> posts</p>
        )}

      </div>
      <ul
        className="animate-in flex flex-col gap-5"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} i={i} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
