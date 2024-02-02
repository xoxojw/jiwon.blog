import Link from "next/link";
import { ReactNode } from "react";

import { cls } from "@/src/libs/util";

type NavLinkProps = {
  pathname: string;
  href: string;
  children: ReactNode;
};

const NavLink = ({ pathname, href, children }: NavLinkProps) => {
  const dynamicPathname = `/${pathname.split("/")[1]}`; // active paths on dynamic subpages
  const active = dynamicPathname === href;

  return (
    <Link
      href={href}
      className={cls("pb-1", active ? "text-primary font-semibold" : "")}
    >
      {children}
    </Link>
  )
}

export default NavLink;