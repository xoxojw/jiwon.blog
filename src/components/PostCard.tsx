import type { Post as PostType } from ".contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import PublishedDate from "./ui/PublishedDate";
import Tags from "./Tags";

type PostCardProps = {
  post: PostType;
  i: number;
}

const PostCard = ({ post, i }: PostCardProps) => {
  const { publishedAt, title, url, tags } = post;
  return (
      <li
        key={i}
        className="animate-in flex flex-col pb-4 border-b border-inherit gap-3"
        style={{ "--index": 3 + i } as React.CSSProperties}
      >
        <Tags tags={post.tags} />
        <Link href={url}><h3 className="text-2xl font-semibold">{title}</h3></Link>
        <PublishedDate publishedAt={publishedAt} />
      </li>
  );
};

export default PostCard;
