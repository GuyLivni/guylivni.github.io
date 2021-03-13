/* http://tholman.com/github-corners/ */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import GitCorner from '../../assets/github-corner-left.svg';

const octocatWave = keyframes`
  0%,100%{
      transform: rotate(0);
  }
  20%,60%{
      transform: rotate(-25deg);
  }
  40%,80%{
      transform: rotate(10deg);
  }
`;

const hrefStyles = ({ theme }) => css`
  display: none;
  z-index: 10000;
  position: fixed;

  @media ${theme.device.tablet} {
    display: block;
  }
`;

const Href = styled('a')`
  ${hrefStyles}
`;

const cornerStyles = ({ theme }) => css`
  fill: ${theme.colors.p600} !important;

  .octo-body,
  .octo-arm {
    fill: ${theme.colors.bodyBackground} !important;
  }

  :hover {
    cursor: pointer;
    .octo-arm {
      animation: ${octocatWave} 660ms ease-in-out infinite 1s;
    }
  }
`;

const StyledGitCorner = styled(GitCorner)`
  ${cornerStyles}
`;

function GithubCorner({ url }) {
  return (
    <Href
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View source on GitHub"
    >
      <StyledGitCorner />
    </Href>
  );
}

GithubCorner.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GithubCorner;
