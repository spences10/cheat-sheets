import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }

  span {
    position: relative;
    padding-left: 4px;
    &:last-child {
      padding-right: 4px;
    }

    &:after {
      display: block;
      content: '';
      background: #e5e9ef;
      position: absolute;
      top: 2px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      transform: skew(-10deg);
    }
  }
`;

export const AnchorTag = ({ href, children }) => (
  <StyledLink to={href}>
    {children.split(' ').map((word, i) => (
      <span key={i}>{word}</span>
    ))}
  </StyledLink>
);
