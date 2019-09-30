import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { H1 } from './page-elements';

const HeaderWrapper = styled.header`
  position: relative;
  margin: 30px;
`;

export const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <H1>{title}</H1>
      </Link>
    </HeaderWrapper>
  );
};
