import { deviceMq } from '../style-helpers';

const white = '#FFFFFF';
const black = '#0F131A';

const neutrals = {
  n100: '#282c35',
  n200: 'rgba(30, 31, 37, 0.59)',
};

const darks = {
  d100: '#18191f',
  d200: '#1c1e25',
};

const greens = {
  g100: '#c5ded7',
  g200: '#45b29a',
  g300: '#08463d',
  g400: '#00ab92',
  g500: '#02a287',
  g600: '#08ccaf',
  g700: '#00ffd9',
};

const primary = {
  p000: neutrals.n100,
  p100: darks.d200,
  p200: neutrals.n200,
  p300: greens.g700,
  p400: greens.g400,
  p500: greens.g600,
  p600: greens.g600,
  p700: darks.d100,
};

const misc = {
  bodyBackground: neutrals.n100,
  textColor: white,
};

export const transitions = {
  default: '200ms ease-out',
};

export const fontWeight = {
  standard: '400',
  medium: '500',
  bold: '700',
};

export const colors = {
  white,
  black,
  ...misc,
  ...neutrals,
  ...primary,
  ...greens,
  ...darks,
};

export const device = deviceMq;
