import styled, { css } from 'styled-components';

const titleStyles = ({ theme }) => css`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 3.5rem;
  color: ${theme.colors.p600};
  text-align: center;
`;

export const Title = styled('h1')`
  ${titleStyles}
`;

const subTitleStyles = ({ theme }) => css`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${theme.colors.p600};
  text-align: center;
`;

export const SubTitle = styled('h2')`
  ${subTitleStyles}
`;

const textStyles = ({ theme }) => css`
  color: ${theme.colors.textColor};
  text-align: center;
`;

export const Text = styled('p')`
  ${textStyles}
`;
