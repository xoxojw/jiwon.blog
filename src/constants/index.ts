interface NavLists {
  name: string;
  href: string;
}

export const NAV_LISTS: NavLists[] = [
  { name: "home", href: "/" },
  { name: "blog", href: "/blog", },
  { name: "about", href: "/about", },
] as const;