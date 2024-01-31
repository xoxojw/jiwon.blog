"use client";
import Link from "next/link";
import { NAV_LISTS } from "@/src/constants";

import NavLink from "./ui/NavLink";
import DarkModeButton from "./DarkModeButton";

const Navigation = () => {
  return (
    <header
      className="relative md:sticky top-0 z-20 w-screen h-20 backdrop-blur-sm"
    >
      <nav className="max-w-4xl mx-auto flex items-center gap-3 p-8">
        <ul className="w-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            {NAV_LISTS.map(({ name, href }) => (
              <li key={name}>
                <NavLink href={href}>
                  {name}
                </NavLink>
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
