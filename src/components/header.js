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
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </HeaderWrapper>
  );
};
