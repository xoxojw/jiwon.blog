"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { NAV_LISTS } from "@/constants";

import { cls } from "@/libs/util";
import DarkModeButton from "./DarkModeButton";

const Navigation = () => {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <header
      className="relative md:sticky top-0 z-20 w-screen h-20 backdrop-blur-sm"
    >
      <nav className="max-w-4xl mx-auto flex items-center gap-3 p-8">
        <ul className="w-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            {NAV_LISTS.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className={cls("pb-1", pathname === href ? "text-primary font-semibold" : "")}
                >
                  {name}
                </Link>
              </li>
            ))}
            </div>
          <li className="hover:text-primary transition duration-400">
            <DarkModeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
