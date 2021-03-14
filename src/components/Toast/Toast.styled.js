import styled, { css } from 'styled-components';
import CoffeeCup from '../../assets/cafe-cup-cookie.svg';
import { fadeInUp, fadeOut } from '../../styles/animations';

const containerStyles = ({ theme }) => css`
  display: block;
  position: absolute;
  z-index: 10;
  margin: 0 auto;
  bottom: 20px;
  pointer-events: none;
  padding: 0;
  animation: ${fadeInUp} 1s 0.2s ease both,
    ${fadeOut} 3s 1s ease normal forwards 1;

  @media ${theme.device.tablet} {
    right: 100px;
    bottom: 30px;
  }

  @media ${theme.device.desktop} {
    right: 150px;
  }

  @media ${theme.device.extraWideDesktop} {
    right: 250px;
  }
`;

export const Container = styled('div')`
  ${containerStyles}
`;

const toastStyles = ({ theme }) => css`
  width: 100%;
  text-align: center;
  background-color: transparent;
  border: solid 0.5px ${theme.colors.p400};
  padding: 13px;
  padding-left: 60px;
  padding-right: 19px;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${theme.colors.p400};
  font-weight: ${theme.fontWeight.standard};

  @media ${theme.device.tablet} {
    padding-left: 70px;
    font-size: 21px;
  }
`;

export const StyledToast = styled('div')`
  ${toastStyles}
`;

const imgStyles = ({ theme }) => css`
  position: absolute;
  left: -21px;
  bottom: -6px;
  vertical-align: middle;
  border-style: none;
  width: 70px;

  @media ${theme.device.tablet} {
    width: 80px;
  }
`;

export const Img = styled(CoffeeCup)`
  ${imgStyles}
`;
