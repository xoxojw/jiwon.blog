import type { Post as PostType } from ".contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import PublishedDate from "./ui/PublishedDate";
import Tags from "./Tags";

type PostCardProps = {
  post: PostType;
  i: number;
};

const PostCard = ({ post, i }: PostCardProps) => {
  const { publishedAt, title, summary, url, tags } = post;
  return (
    <li
      key={i}
      className="animate-in flex flex-col pb-4 border-b border-inherit gap-3"
      style={{ "--index": 3 + i } as React.CSSProperties}
    >
      <div className="flex justify-between">
        <Link href={url}>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </Link>
        <Tags tags={tags} />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{summary}</p>
      <PublishedDate publishedAt={publishedAt} />
    </li>
  );
};

export default PostCard;
