import { Box, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

export const Header = ({ title }) => {
  return (
    <Box as="header" m="30px 0">
      <Link as={GatsbyLink} to="/">
        <Box as="h1" fontSize="4xl">
          {title}
        </Box>
      </Link>
    </Box>
  )
}
