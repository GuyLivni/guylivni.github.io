export type Label = 'Github' | 'Medium' | 'Twitter' | 'LinkedIn' | 'Email';

export type Link = {
  label: Label;
  url: string;
};

export type SocialLinks = Link[];

