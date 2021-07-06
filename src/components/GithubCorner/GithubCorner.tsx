/* http://tholman.com/github-corners/ */
import React from 'react';
import { Href, StyledGitCorner } from './GithubCorner.styled';

function GithubCorner({ url }: { url: string }) {
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

export default GithubCorner;
