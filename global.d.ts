declare module '@tailwindcss/forms';
declare module '@tailwindcss/typography';
declare module '@tailwindcss/line-clamp';
declare module '@tailwindcss/aspect-ratio';

type AppPageFeatures =
{
    name: string,
    description: string,
    imageSrc: string,
    imageAlt: string
  }[]

  type SocialMediaLinkMapping = {
    facebook: string | null;
    twitter: string | null;
    instagram: string | null;
    github: string | null;
    linkedin: string | null;
    displayEmail: string | null;
    other: string | null;
  }

  type BlogPosts = {
    title: string,
    description: string,
    category: { name: string },
    author: string,
    date: string,
    id: string,
    content: string
  }[]

  type Author = {
    name: string,
    fields: {
      title: string,
      company: string
    },
    description: string,
    photo: {
      name: string | null,
      url: string | null
    }
  }