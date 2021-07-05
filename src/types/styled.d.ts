import 'styled-components';

type Colors = {
  // Misc
  black: string;
  white: string;
  bodyBackground?: string;
  textColor?: string;
  // Whites
  w100?: string;
  w200?: string;
  // Neutrals
  n100?: string;
  n200?: string;
  // Darks
  d100?: string;
  d200?: string;
  d300?: string;
  d400?: string;
  d500?: string;
  // Greens
  g000?: string;
  g100?: string;
  g200?: string;
  g300?: string;
  g400?: string;
  g500?: string;
  g600?: string;
  g700?: string;
  // Blues
  b100?: string;
  b200?: string;
  b300?: string;
  b400?: string;
  b500?: string;
  b600?: string;
  b700?: string;
  // Primary
  p000?: string;
  p100?: string;
  p200?: string;
  p300?: string;
  p400?: string;
  p500?: string;
  p600?: string;
  p700?: string;
};

type FontWeight = {
  standard: string;
  medium: string;
  bold: string;
};

type Transitions = {
  default: string;
};

type DeviceType = {
  mobile: string;
  tablet: string;
  desktop: string;
  wideDesktop: string;
  extraWideDesktop: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontWeight: FontWeight;
    transitions: Transitions;
    device: DeviceType;
  }
}
