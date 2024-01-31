interface NavLists {
  name: "home" | "blog" | "about";
  href: "/" | "/blog" | "/about";
}

export const NAV_LISTS: NavLists[] = [
  {
    name: "home",
    href: "/"
  },
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "about",
    href: "/about",
  },
] as const;