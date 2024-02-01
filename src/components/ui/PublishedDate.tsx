import { format, parseISO } from "date-fns";

type Props = {
  publishedAt: string;
  dateFormat?: string;
}

const PublishedDate = ({ publishedAt, dateFormat = "yyyy-MM-dd" }: Props) => {
  return (
    <p className="text-sm text-gray-500">
      {format(parseISO(publishedAt), dateFormat)}
    </p>
  );
};

export default PublishedDate;
