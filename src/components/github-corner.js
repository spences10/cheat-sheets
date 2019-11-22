import React from 'react';
import styled from 'styled-components';
import gitHubCorner from '../../static/github-corner-right.svg';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const CornerStyle = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  height: 80px;
  width: 80px;
  background-image: url(${gitHubCorner});
`;

export const GitHubCorner = () => {
  const { gitHubUrl } = useSiteMetadata();
  return (
    <CornerStyle
      role="link"
      aria-label="github repo link"
      href={gitHubUrl}
      target="_blank"
      rel="noopener"
    />
  );
};
