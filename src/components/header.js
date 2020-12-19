import { Box } from '@chakra-ui/react'
import React from 'react'
import { A } from '../components/md-page-elements'

export const Header = ({ title }) => {
  return (
    <Box as="header" m="30px 0">
      <A to="/">
        <Box as="h1" fontSize="4xl">
          {title}
        </Box>
      </A>
    </Box>
  )
}
