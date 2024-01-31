import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { cls } from "@/src/libs/util";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages
  const active = pathname === href;

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