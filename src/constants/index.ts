interface NavLists {
  name: "blog" | "about";
  href: "/blog" | "/about";
}

export const NAV_LISTS: NavLists[] = [
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "about",
    href: "/about",
  },
] as const;