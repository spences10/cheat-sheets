import { Box, Link, Spacer } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { ThemeToggle } from '../components/theme-toggle'

export const Header = ({ title }) => {
  return (
    <Box as="header" m="30px 0" display="flex">
      <Link as={GatsbyLink} to="/">
        <Box as="h1" fontSize="4xl">
          {title}
        </Box>
      </Link>
      <Spacer />
      <Box as="div" position="relative">
        <ThemeToggle />
      </Box>
    </Box>
  )
}
