import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  grid-area: h;
`;

export const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
    </HeaderWrapper>
  );
};
