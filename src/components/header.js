import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: relative;
  margin: 30px;
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
