import { DefaultTheme } from 'styled-components';
import { deviceMq } from '../style-helpers';

const white = '#FFFFFF';
const black = '#0F131A';

const neutrals = {
  n100: '#e1e4e8',
  n200: 'rgba(132, 132, 132, 0.21)',
};

const darks = {
  d100: '#2d3033',
  d200: '#282c35',
  d300: '#333333',
  d400: '#1d1d1d',
  d500: '#212121',
};

const whites = {
  w100: '#f1f1f1',
  w200: '#fafbfc',
};

const blues = {
  b100: '#f6f9fc',
  b200: '#00a3c5',
  b300: '#c9d8e0',
  b400: '#0598b7',
  b500: '#41687b',
  b600: '#2d4652',
  b700: '#1b333e',
};

const greens = {
  g000: '#e0ebe8',
  g100: '#ade0d2',
  g200: '#4ab19a',
  g300: '#00b399',
  g400: '#3e9c87',
  g500: '#217d68',
  g600: '#006151',
  g700: '#02584d',
};

const primary = {
  p000: white,
  p100: darks.d500,
  p200: neutrals.n200,
  p300: greens.g300,
  p400: darks.d300,
  p500: whites.w100,
  p600: darks.d300,
  p700: darks.d400,
};

const misc = {
  bodyBackground: white,
  textColor: darks.d300,
};

const transitions = {
  default: '0.2s ease-out',
};

const fontWeight = {
  standard: '400',
  medium: '500',
  bold: '700',
};

const colors = {
  white,
  black,
  ...misc,
  ...primary,
  ...greens,
  ...blues,
  ...neutrals,
  ...darks,
  ...whites,
};

export const mainTheme: DefaultTheme = {
  colors,
  fontWeight,
  transitions,
  device: deviceMq,
};
