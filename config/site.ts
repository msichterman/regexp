import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    personal: string
  }
}

export const siteConfig: SiteConfig = {
  name: "RegExp",
  description:
    "Stop wasting hours learning & writing regular expressions, when AI has you covered.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/mattsichterman",
    github: "https://github.com/msichterman",
    personal: "https://msich.dev/",
  },
}
