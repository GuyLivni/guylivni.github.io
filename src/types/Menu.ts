import { IconType } from 'react-icons';
type Label = 'Home' | 'About' | 'Blog' | 'Contact';

type Route = {
  path: string;
  label: Label;
  Icon: IconType;
};

export type Routes = Route[];
