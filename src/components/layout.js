import { Box } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../components/header'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <Box as="div" m={['0 2rem', '0 auto']} maxWidth="640px">
      <Header title={title} />
      {children}
    </Box>
  )
}
