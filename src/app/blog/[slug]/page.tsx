import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, Post as PostType } from "@/.contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const BlogPage = ({ params }: { params: { slug: string }; }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // const MDXContent = useMDXComponent(post.body.code);

  return (
    <section className="animate-in leading-7">
      <h1 className="animate-in font-semibold text-lg" style={{ "--index": 1 } as React.CSSProperties}>
        {post.title}
      </h1>
      <p className="animate-in" style={{ "--index": 2 } as React.CSSProperties}>
        {post.summary}
      </p>
    </section>
  );
};

export default BlogPage;