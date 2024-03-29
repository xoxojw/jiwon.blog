import type { Metadata, ResolvingMetadata } from "next";

import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import MdxWrapper from "../components/MdxWrapper";
import PublishedDate from "@/src/components/ui/PublishedDate";
import Tags from "@/src/components/Tags";
import Comments from "../components/Comments";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    throw new Error("Post not found");
  }

  const { title, summary: description, tags:keywords } = post;

  const metadata: Metadata = {
    title: `${title} | Jiwon Log`,
    description,
    keywords,
    openGraph: {
      title: `${title} | Jiwon Log`,
      description,
      type: "article",
      url: `https://jiwon.blog/posts/${title}`,
    },
  };

  return metadata;
};

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="flex flex-col gap-8">
        <div className="animate-in flex flex-col gap-4 border-b pb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
            <h1 className="font-bold text-3xl">{post.title}</h1>
            <Tags tags={post.tags} />
          </div>
          <PublishedDate animateIndex={1} publishedAt={post.publishedAt} dateFormat="LLLL d, yyyy" />
          <blockquote
            className="animate-in text-gray-700 dark:text-gray-400"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            {post.summary}
          </blockquote>
        </div>
        <div className="animate-in prose dark:prose-invert max-w-none" style={{ "--index": 3 } as React.CSSProperties}>
          <MdxWrapper code={post.body.code} />
        </div>
      </section>
      <Comments />
    </>
  );
};

export default BlogPage;
