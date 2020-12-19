import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

// const CornerStyle = styled.a`
//   position: absolute;
//   top: 0;
//   right: 0;
//   height: 80px;
//   width: 80px;
//   background-image: url(${gitHubCorner});
// `;

export const GitHubCorner = () => {
  const { gitHubUrl } = useSiteMetadata()
  return (
    <a
      role="link"
      aria-label="github repo link"
      href={gitHubUrl}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}
