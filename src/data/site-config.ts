import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: SITE_TITLE,
  subtitle: SITE_DESCRIPTION,
  description: "记录我的学习笔记以及内容分享。",
  image: {
    src: "",
    alt: "",
  },
  headerNavLinks: [
    {
      text: "首页",
      href: "/",
    },
    {
      text: "笔记",
      href: "/blog",
    },
    {
      text: "类别",
      href: "/tags",
    },
  ],
  footerNavLinks: [],
  socialLinks: [
    {
      text: "GitHub",
      href: "https://github.com/zhnd",
    },
    {
      text: "X/Twitter",
      href: "https://twitter.com/ph_outin",
    },
  ],
  subscribe: {
    title: "Subscribe to Outinx Newsletter",
    text: "One update per week. All the latest posts directly in your inbox.",
    formUrl: "#",
  },
  postsPerPage: 8,
  projectsPerPage: 8,
};

export default siteConfig;
