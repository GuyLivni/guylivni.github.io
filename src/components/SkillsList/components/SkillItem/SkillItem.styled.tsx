import styled, { css, DefaultTheme } from 'styled-components';

const containerStyles = ({ theme }: { theme: DefaultTheme }) => css`
  margin: 40px 40px 0 0;

  :first-child {
    margin-top: 0;
  }

  @media ${theme.device.desktop} {
    margin: 0 80px 0 0;
  }
`;

export const Container = styled('div')`
  ${containerStyles}
`;

const skillTitleStyles = ({ theme }: { theme: DefaultTheme }) => css`
  color: ${theme.colors.p600};
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  letter-spacing: 0;
  text-transform: none;
`;

export const SkillTitle = styled('h4')`
  ${skillTitleStyles}
`;

const skillStyles = ({ theme }: { theme: DefaultTheme }) => css`
  color: ${theme.colors.textColor};
`;

export const Skill = styled('li')`
  ${skillStyles}
`;
