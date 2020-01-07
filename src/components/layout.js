import React from 'react';
import styled from 'styled-components';
// import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { GlobalStyle } from '../theme/globalStyle';

const AppLayout = styled.main`
  max-width: 570px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.p};
`;

const Wrapper = styled.div`
  margin: 30px;
  ul {
    padding: 0;
  }
`;

export const Layout = ({ children }) => {
  // const { title } = useSiteMetadata();
  return (
    <AppLayout>
      <GlobalStyle />
      {/* <Header title={title} /> */}
      <Wrapper>{children}</Wrapper>
    </AppLayout>
  );
};
