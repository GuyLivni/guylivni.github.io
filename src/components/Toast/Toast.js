import React from 'react';
import PropTypes from 'prop-types';
import { Container, Img, StyledToast } from './Toast.styled';

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

function Toast({ toasts }) {
  return (
    <Container>
      <Img alt="greeting" />
      <StyledToast>{getGreetingByTime(toasts)}</StyledToast>
    </Container>
  );
}

Toast.propTypes = {
  toasts: PropTypes.object.isRequired,
};

export default Toast;
