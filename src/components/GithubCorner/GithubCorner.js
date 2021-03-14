/* http://tholman.com/github-corners/ */
import React from 'react';
import PropTypes from 'prop-types';
import { Href, StyledGitCorner } from './GithubCorner.styled';

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
