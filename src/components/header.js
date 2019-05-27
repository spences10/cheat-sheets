import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  grid-area: h;
`;

export const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
    </HeaderWrapper>
  );
};
