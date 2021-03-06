import { css } from 'styled-components';

const MOBILE = '480px';
const TABLET = '768px';
const DESKTOP = '960px';
const WIDE_DESKTOP = '1280px';

export const media = {
  small: (...args) => css`
    @media (min-width: ${MOBILE}) {
      ${css(...args)};
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${TABLET}) {
      ${css(...args)};
    }
  `,
  large: (...args) => css`
    @media (min-width: ${DESKTOP}) {
      ${css(...args)};
    }
  `,
  huge: (...args) => css`
    @media (min-width: ${WIDE_DESKTOP}) {
      ${css(...args)};
    }
  `,
};
