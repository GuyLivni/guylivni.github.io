import styled, { css } from 'styled-components';
import { animations } from '../../styles';

const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const containerAnimateStyles = ({ theme, animate }) =>
  animate &&
  css`
    animation: ${animations.fadeInUp} 0.6s 0.8s ease both;
  `;

export const Container = styled('div')`
  ${containerStyles}${containerAnimateStyles}
`;

export const Href = styled('a')`
  cursor: pointer;
  box-shadow: none;
  display: flex;
`;

const invertStyles = ({ theme, invert }) =>
  invert &&
  css`
    color: ${theme.colors.p500};
  `;

const iconStyles = ({ theme }) => css`
  display: flex;
  font-size: 20px;
  color: ${theme.colors.p600};
  margin: 0 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    transform ${theme.transitions.default};
  :hover {
    transform: translate3d(0px, -2px, 0px);
    color: ${theme.colors.p300};
  }
`;

export const StyledIcon = styled('div')`
  ${iconStyles}${invertStyles}
`;

const titleStyles = ({ theme }) => css`
  color: ${theme.colors.p600};
  :after {
    content: '';
    background-color: ${theme.colors.p600};
    width: 8px;
    height: 1px;
    display: inline-block;
    position: relative;
    top: -4px;
    margin-left: 8px;

    @media ${theme.device.tablet} {
      margin-left: 12px;
      width: 26px;
    }
  }
`;

export const Title = styled('div')`
  ${titleStyles}
`;
