import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../pages';

const HeaderWrapper = styled.header`
  position: relative;
  margin: 30px;
`;

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.h1};
  font-size: 40px;
`;

export const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <StyledHeading>
        <StyledLink to="/">{title}</StyledLink>
      </StyledHeading>
    </HeaderWrapper>
  );
};
