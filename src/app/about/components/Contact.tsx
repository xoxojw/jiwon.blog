import Link from "next/link";

import { IoMail, IoDocumentText } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const contactLists = [
  {
    label: "Email",
    href: "mailto:xoxojw.dev@gmail.com",
    icon: <IoMail />
  },
  {
    label: "GitHub",
    href: "https://github.com/xoxojw",
    icon: <FaGithub />
  },
  {
    label: "Portfolio",
    href: "https://xoxojw.notion.site/bade2269abbe4ee9a9a03df3f0d6e8fc?pvs=4",
    icon: <IoDocumentText />
  }
]

const Contact = ({ index }: { index: number }) => {
  return (
    <ul className="animate-in flex-grow grid grid-cols-1 sm:grid-cols-4 gap-2">
      {contactLists.map((item, i) => (
        <li
          key={item.label}
          className="border rounded-md px-4 py-3 hover:-translate-y-1 transition ease-in-out"
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
