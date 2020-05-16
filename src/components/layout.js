import React from 'react'
import styled from 'styled-components'
// import { Dump } from '../components/dump';
import { Header } from '../components/header'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { GlobalStyle } from '../theme/global-style'

const AppLayout = styled.main`
  max-width: 570px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  margin: 30px;
  ul {
    padding: 0;
  }
`

export const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <AppLayout>
      <GlobalStyle />
      <Header title={title} />
      <Wrapper>{children}</Wrapper>
    </AppLayout>
  )
}
