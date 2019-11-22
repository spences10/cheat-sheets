import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: relative;
  margin: 30px;
`;

const StyledH1 = styled.h1`
  font-family: ${({ theme }) => theme.h1};
  font-size: 40px;
`;

export const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <StyledH1>
        <Link to="/">{title}</Link>
      </StyledH1>
    </HeaderWrapper>
  );
};
