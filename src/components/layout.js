import React from 'react';
import styled from 'styled-components';
// import { Dump } from '../components/dump';
import { Header } from '../components/header';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { GlobalStyle } from '../theme/globalStyle';
import { media } from '../theme/sizes';

const AppLayout = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . . h h h h h h . . .'
    '. . . m m m m m m . . .'
    '. . . f f f f f f . . .';
  ${media.giant`
    grid-template-areas:
      '. . . h h h h h h . . .'
      '. . . m m m m m m . . .'
      '. . . f f f f f f . . .';
    background: goldenrod;
  `};
  ${media.desktop`
    grid-template-areas:
      '. . . h h h h h h . . .'
      '. . . m m m m m m . . .'
      '. . . f f f f f f . . .';
    background: dodgerblue;
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      'm m m m m m m m m'
      'f f f f f f f f f';
    background: mediumseagreen;
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      'm m m m m m m m m'
      'f f f f f f f f f';
    background: palevioletred;
  `};
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
