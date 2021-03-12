import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CoffeeCup from '../../assets/cafe-cup-cookie.svg';
import { fadeInUp, fadeOut } from '../../styles/animations';

const getGreetingByTime = (toasts) => {
  const currentHour = new Date().getHours();

  if (currentHour >= 12 && currentHour <= 17) {
    return toasts.Afternoon;
  } else if (currentHour >= 17) {
    return toasts.Evening;
  } else {
    return toasts.Morning;
  }
};

const containerStyles = ({ theme }) => css`
  display: block;
  position: fixed;
  z-index: 9;
  top: 420px;
  right: 200px;
  pointer-events: none;
  padding: 0;
  animation: ${fadeInUp} 1s 0.2s ease both,
    ${fadeOut} 3s 1s ease normal forwards 1;
`;

const Container = styled('div')`
  ${containerStyles}
`;

const toastStyles = ({ theme }) => css`
  width: 100%;
  text-align: center;
  background-color: transparent;
  border: solid 0.5px ${theme.colors.p400};
  padding: 13px;
  padding-left: 70px;
  padding-right: 19px;
  font-size: 21px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${theme.colors.p400};
  font-weight: ${theme.fontWeight.standard};
`;

const StyledToast = styled('div')`
  ${toastStyles}
`;

const imgStyles = ({ theme }) => css`
  position: absolute;
  left: -21px;
  bottom: -6px;
  vertical-align: middle;
  border-style: none;
  width: 80px;
`;

const Img = styled(CoffeeCup)`
  ${imgStyles}
`;

function Toast({ location, toasts }) {
  if (location.pathname !== '/') return null;

  return (
    <Container>
      <Img alt="greeting" />
      <StyledToast>{getGreetingByTime(toasts)}</StyledToast>
    </Container>
  );
}

Toast.propTypes = {
  location: PropTypes.object.isRequired,
  toasts: PropTypes.object.isRequired,
};

export default Toast;
