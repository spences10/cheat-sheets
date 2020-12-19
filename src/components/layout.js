import React from 'react'
import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'
// import { Header } from '../components/header'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { GlobalStyle } from '../theme/global-style'

const AppLayout = styled.main`
  max-width: 570px;
  margin: 0 auto;
  ${down('sm')} {
    margin: 30px;
    /* background-color: seagreen; */
  }
  ${up('md')} {
    /* background-color: dodgerblue; */
  }
  ${up('lg')} {
    /* background-color: rebeccapurple; */
  }
  ${up('xl')} {
    /* background-color: hotpink; */
  }
`

export const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <AppLayout>
      <GlobalStyle />
      {/* <Header title={title} /> */}
      {children}
    </AppLayout>
  )
}
