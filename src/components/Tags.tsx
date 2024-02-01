type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <ul className="flex gap-2 text-sm">
      {tags.map((tag: string, i: number) => (
        <li key={i} className="bg-gray-300/20 px-2 py-1 rounded-md select-none">{tag}</li>
      ))}
    </ul>
  );
};

export default Tags;