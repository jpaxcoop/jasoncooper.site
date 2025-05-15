export type Thumb = {
  title: string;
  imgSrc: string;
  description: string;
  linkHref: string;
  openInNewTab: boolean;
};

export type ThumbCollection = {
  [key: string]: Thumb;
};