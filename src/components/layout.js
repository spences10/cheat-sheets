import React from 'react';
import styled from 'styled-components';
// import { Dump } from '../components/dump';
import { Header } from '../components/header';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { GlobalStyle } from '../theme/globalStyle';

const AppLayout = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . . h h h h h h . . .'
    '. . . m m m m m m . . .'
    '. . . f f f f f f . . .';
`;

const Wrapper = styled.div`
  grid-area: m;
`;

export const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  return (
    <AppLayout>
      <GlobalStyle />
      <Header title={title} />
      <Wrapper>{children}</Wrapper>
    </AppLayout>
  );
};
