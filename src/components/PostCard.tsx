import type { Post as PostType } from ".contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";

type PostCardProps = {
  post: PostType;
  i: number;
}

const PostCard = ({ post, i }: PostCardProps) => {
  const { publishedAt, title, url, slug, tags } = post;
  return (
    <Link href={url}>
      <li
        key={i}
        className="animate-in flex flex-col pb-4 border-b gap-2"
        style={{ "--index": 3 + i } as React.CSSProperties}
      >
        <p className="text-sm text-primary">{tags}</p>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">
          {format(parseISO(publishedAt), "yyyy-MM-dd")}
        </p>
      </li>
    </Link>
  );
};

export default PostCard;
