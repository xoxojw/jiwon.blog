"use client";
import NavLink from "./ui/NavLink";
import DarkModeButton from "./ui/DarkModeButton";
import { usePathname } from "next/navigation";
import ProgressBar from "../app/posts/components/ProgressBar";

type NavLists = {
  name: "home" | "posts" | "about";
  href: "/" | "/posts" | "/about";
}

export const NavLists: NavLists[] = [
  { name: "home", href: "/" },
  { name: "posts", href: "/posts", },
  { name: "about", href: "/about", },
] as const;

const Navigation = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 w-screen h-20 bg-inherit">
      {pathname.includes("posts/") ? <ProgressBar /> : null}
      <nav className="max-w-4xl mx-auto flex items-center gap-3 p-8">
        <ul className="w-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            {NavLists.map(({ name, href }) => (
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
