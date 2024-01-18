"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { NAV_LISTS } from "@/constants";

import { Moon, Sun } from "lucide-react";
import pointLogo from "../../public/images/point-ellipse.png"

const NavBar = () => {
  let pathname = usePathname();
  
  return (
    <header className="header">
      <nav className="w-full flex justify-between items-center text-lg gap-7 font-medium">
        <Link href="/" className="text-3xl font-bold flex gap-2">
          <Image
            src={pointLogo}
            alt="point logo image"
            className="w-3 h-3"
          />
          <p className="blue-gradient_text">Jiwon Log</p>
        </Link>
        <ul className="flex font-normal items-center">
          {NAV_LISTS.map(({ name, href }) => (
            <li key={name} className="mx-4 my-5 border-b-4 border-transparent hover:border-blue-500 transition duration-400 border-primary">
              <Link href={href}>{name}</Link>
            </li>
          ))}
          <li className="mx-4 my-5 hover:text-blue-500 transition duration-400">
            <button>
              <Moon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;