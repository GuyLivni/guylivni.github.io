import React from 'react';
import { Container, Img, StyledToast } from './Toast.styled';

type ToastOptions = 'Afternoon' | 'Evening' | 'Morning';

type Toasts = { [x in ToastOptions]: string };

type Props = {
  toasts: Toasts;
};

const getGreetingByTime = (toasts: Toasts) => {
  const currentHour = new Date().getHours();

  if (currentHour >= 12 && currentHour <= 17) {
    return toasts.Afternoon;
  } else if (currentHour >= 17) {
    return toasts.Evening;
  } else {
    return toasts.Morning;
  }
};

const Toast = ({ toasts }: Props) => (
  <Container>
    <Img />
    <StyledToast>{getGreetingByTime(toasts)}</StyledToast>
  </Container>
);

export default Toast;
