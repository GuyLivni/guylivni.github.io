import styled, { css } from 'styled-components';
import { fadeInDown } from '../../styles/animations';

const labelStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  animation: ${fadeInDown} 0.6s 0.2s ease both;

  @media ${theme.device.tablet} {
    display: none;
  }
`;

export const Label = styled('label')`
  ${labelStyles}
`;
