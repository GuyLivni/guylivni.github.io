/* http://tholman.com/github-corners/ */
import React from 'react';
import { Href, StyledGitCorner } from './GithubCorner.styled';

type Props = {
  url: string;
};

const GithubCorner = ({ url }: Props) => (
  <Href
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View source on GitHub"
  >
    <StyledGitCorner />
  </Href>
);

export default GithubCorner;
