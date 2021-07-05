const size = {
  mobile: '480px',
  tablet: '768px',
  desktop: '960px',
  wideDesktop: '1280px',
  extraWideDesktop: '2560px',
};

export const deviceMq = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  wideDesktop: `(min-width: ${size.wideDesktop})`,
  extraWideDesktop: `(min-width: ${size.extraWideDesktop})`,
};
