interface NavLists {
  name: string;
  href: string;
}

export const NAV_LISTS: NavLists[] = [
  { name: "home", href: "/" },
  { name: "posts", href: "/posts", },
  { name: "about", href: "/about", },
] as const;

export const playlistId = "PLvtUcr-iolHajTv-6vIDR-xhu3gWjR2mL";