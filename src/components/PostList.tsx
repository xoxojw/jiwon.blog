"use client";
import { notFound, usePathname } from "next/navigation";
import Link from "next/link";
import type { Post as PostType } from ".contentlayer/generated";
import PostCard from "./PostCard";

import { NAV_LISTS } from "../constants";

type PostListProps = {
  index?: number;
  posts: PostType[];
};

// "/"에서는 최근 글 5개, "/blog"에서는 전체 글을 리스트업
const PostList = ({ index, posts }: PostListProps) => {
  const pathname = `/${usePathname().split("/")[1]}`;
  
  const navMap = new Map(NAV_LISTS.map(item => [item.name, item.href]));
  const homeHref = navMap.has("home") ? navMap.get("home") : "/";
  const postsHref = navMap.has("posts") ? navMap.get("posts") : "/posts";

  if (!homeHref || !postsHref) return notFound();

  return (
    <div className="flex animate-in flex-col gap-8" style={{ "--index": index ? index : 0 } as React.CSSProperties}>
      <div className="flex items-center justify-between gap-3">
        <div className="animate-in heading-first" style={{ "--index": 1 } as React.CSSProperties}>
          {pathname === homeHref ?
            <h2 className="heading-second">Latest Posts</h2>
            : <h1>Posts</h1>}
        </div>

        {pathname === homeHref ? (
          <Link href={postsHref} className="underline underline-offset-4 hover">
            See All
          </Link>
        ) : (
          <p>
            <span className="text-primary font-medium">{posts.length}</span> posts
          </p>
        )}
      </div>

      <ul className="animate-in flex flex-col gap-5" style={{ "--index": 2 } as React.CSSProperties}>
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} i={i} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
