import Link from "next/link";
import { contactLists } from "@/src/constants/contactLists";

const Contact = ({ index }: { index: number }) => {
  return (
    <ul className="animate-in flex-grow grid grid-cols-1 sm:grid-cols-4 gap-2">
      {contactLists.map((item, i) => (
        <li
          key={item.label}
          className="animate-in border rounded-md px-4 py-3 hover:-translate-y-1 transition ease-in-out"
          style={{ "--index": index + i } as React.CSSProperties}
        >
          <Link href={item.href} target="blank" className="flex items-center gap-2 hover:text-current">
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Contact;
