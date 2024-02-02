type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <ul className="flex gap-3 text-xs">
      {tags.map((tag: string, i: number) => (
        <li key={i} className="text-gray-400 rounded-md select-none">{tag}</li>
      ))}
    </ul>
  );
};

export default Tags;