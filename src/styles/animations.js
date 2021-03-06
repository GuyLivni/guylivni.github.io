import { keyframes, css } from 'styled-components';

export const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(25px)
    }

    100% {
        opacity: 1;
        transform: translateY(0)
    }
`;

export const fadeInDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-25px)
    }

    100% {
        opacity: 1;
        transform: translateY(0)
    }
`;

export const underlineEffect = ({ theme }) => css`
  :before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: ${theme.colors.p400};
    will-change: transform;
    transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scaleX(0);
    transform-origin: 100% 50%;
  }

  :hover {
    :before {
      transform: scaleX(1);
      transform-origin: 0 50%;
      transition-timing-function: ease;
    }
  }
`;