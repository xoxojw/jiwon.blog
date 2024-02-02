"use client";
import { NAV_LISTS } from "@/src/constants";

import NavLink from "./ui/NavLink";
import DarkModeButton from "./DarkModeButton";
import { usePathname } from "next/navigation";
import ProgressBar from "../app/blog/components/ProgressBar";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 w-screen h-20 bg-inherit">
      {pathname.includes("blog/") ? <ProgressBar /> : null}
      <nav className="max-w-4xl mx-auto flex items-center gap-3 p-8">
        <ul className="w-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            {NAV_LISTS.map(({ name, href }) => (
              <li key={name}>
                <NavLink pathname={pathname} href={href}>
                  {name}
                </NavLink>
              </li>
            ))}
            </div>
          <li className="hover:text-primary dark:hover:text-secondary transition duration-400 flex">
            <DarkModeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
