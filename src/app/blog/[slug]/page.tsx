import type { Metadata, ResolvingMetadata } from "next";

import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import MdxWrapper from "../components/MdxWrapper";
import { format, parseISO } from "date-fns";
import PublishedDate from "@/src/components/ui/PublishedDate";

const BlogPage = ({ params }: { params: { slug: string }; }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="flex flex-col gap-8">
      <div className="animate-in flex flex-col gap-4 border-b pb-8">
        <h1 className="font-bold text-3xl">
          {post.title}
        </h1>
        <PublishedDate publishedAt={post.publishedAt} dateFormat="LLLL d, yyyy" />
        <blockquote>{post.summary}</blockquote>
      </div>
      <div className="animate-in prose dark:prose-invert max-w-none" style={{ "--index": 1 } as React.CSSProperties}>
        <MdxWrapper code={post.body.code} />
      </div>
    </section>
  );
};

export default BlogPage;