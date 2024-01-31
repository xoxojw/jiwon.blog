"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { NAV_LISTS } from "@/constants";

import { HiOutlineMoon } from "react-icons/hi";

const Navigation = () => {
  return (
    <header className="relative md:sticky top-0 z-20 w-screen h-20">
      <nav className="max-w-4xl mx-auto flex justify-end items-center gap-3 py-1">
        <ul className="flex font-normal items-center">
          {NAV_LISTS.map(({ name, href }) => (
            <li
              key={name}
              className="mx-4 my-5 border-b-4 border-transparent hover:border-blue-500 transition duration-400 border-primary"
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
          <li className="mx-4 my-5 hover:text-blue-500 transition duration-400">
            <button>
              <HiOutlineMoon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
