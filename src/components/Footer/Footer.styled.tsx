import styled, { css, DefaultTheme } from 'styled-components';

const containerStyles = ({ theme }: { theme: DefaultTheme }) => css`
  z-index: -1;
  padding-left: 0;
  position: relative;
  margin-bottom: 55px;

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 100px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${theme.colors.p700};
    z-index: -1;
  }

  @media ${theme.device.tablet} {
    padding-left: 100px;
    margin-bottom: 0;
  }
`;

export const Container = styled('div')`
  ${containerStyles}
`;

const contentStyles = ({ theme }: { theme: DefaultTheme }) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.p100};
  transition: all ${theme.transitions.default};
  width: 100%;
  border-top: 1px solid ${theme.colors.n100};
  padding: 20px;

  @media ${theme.device.tablet} {
    align-items: flex-start;
    margin: 0;
    min-height: 140px;
  }
`;

export const Content = styled('div')`
  ${contentStyles}
`;

const footerInnerStyles = ({ theme }: { theme: DefaultTheme }) => css`
  min-height: 80px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media ${theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 70px;
    min-height: 100px;
  }
`;

export const FooterInner = styled('div')`
  ${footerInnerStyles}
`;

const copyrightsStyles = ({ theme }: { theme: DefaultTheme }) => css`
  text-align: center;
  color: ${theme.colors.p500};
  font-size: 12px;
  font-weight: ${theme.fontWeight.standard};
  margin: 10px 0 0 0;
  opacity: 0.7;

  @media ${theme.device.tablet} {
    margin: 0;
  }
`;

export const CopyRights = styled('p')`
  ${copyrightsStyles}
`;
