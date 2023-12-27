import type { ShortMetadataType } from "./types/Metadata";

export const site = {
  email: 'hello@astro.build',
  name: "astro portfolio",
  url: "https://localhost:4321",
} as { email: string, name: string, url: string };

export const mainNavigation = [
  {
    title: "projects",
    url: "/projects",
  },
  {
    title: "blog",
    url: "/blog",
  },
  {
    title: "our team",
    url: "/our-team",
  },
] as { title: string, url: string }[];

export const homeMetadata = {
  description: "an astro-based portfolio site, showcasing blog posts, projects, and more",
  thumbnail_alt: "A little astronaut in the moon",
  thumbnail: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?auto=format&fit=crop&q=70&w=1080",
  title: "home",
} as ShortMetadataType;

export const blogMetadata = {
  description: "blog posts about web development, programming, and more",
  thumbnail_alt: "A little astronaut in the moon",
  thumbnail: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?auto=format&fit=crop&q=70&w=1080",
  title: "blog",
} as ShortMetadataType;

export const hashtagsMetadata = {
  description: "here are all the hashtags used on the site",
  thumbnail_alt: "astro.build logo",
  thumbnail: "https://astro.build/assets/press/astro-logo-light-gradient.png",
  title: "Hashtags",
} as ShortMetadataType;

export const hashtagMetadata = {
  description: "",
  thumbnail_alt: "astro.build logo",
  thumbnail: "https://astro.build/assets/press/astro-logo-light-gradient.png",
  title: "",
} as ShortMetadataType;

export const projectsMetadata = {
  description: "a place to showcase projects you've worked on",
  thumbnail_alt: "A little astronaut in the moon",
  thumbnail: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?auto=format&fit=crop&q=70&w=1080",
  title: "projects",
} as ShortMetadataType;

export const ourTeamMetadata = {
  description: "meet the team behind the magic",
  thumbnail_alt: "A little astronaut in the moon",
  thumbnail: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?auto=format&fit=crop&q=70&w=1080",
  title: "our team",
} as ShortMetadataType;

export const fourOhFourMetadata = {
  description: "404 page not found",
  thumbnail_alt: "A little astronaut in the moon",
  thumbnail: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?auto=format&fit=crop&q=70&w=1080",
  title: "Page Not Found",
} as ShortMetadataType;