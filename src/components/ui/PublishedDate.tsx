import { cls } from "@/src/libs/util";
import { format, parseISO } from "date-fns";

type Props = {
  animateIndex?: number;
  publishedAt: string;
  dateFormat?: string;
}

const PublishedDate = ({ animateIndex, publishedAt, dateFormat = "yyyy-MM-dd" }: Props) => {
  return (
    <p
      className={cls("text-sm text-gray-500", `${animateIndex ? "animate-in" : ""}`)}
      style={{ "--index": animateIndex } as React.CSSProperties}
    >
      {format(parseISO(publishedAt), dateFormat)}
    </p>
  );
};

export default PublishedDate;
