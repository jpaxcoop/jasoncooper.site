export type ProjectThumb = {
  id: string,
  title: string;
  imgSrc: string;
  description: string;
  linkHref: string;
  openInNewTab: boolean;
  skills: string[];
};

export type ProjectThumbCollection = {
  [key: string]: ProjectThumb;
};