import { Box, Link, Spacer } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { ThemeToggle } from '../components/theme-toggle'

export const Header = ({ title }) => {
  return (
    <Box as="header" m="30px 0" display="flex">
      <Link
        as={GatsbyLink}
        to="/"
        textDecor="underline"
        fontWeight="bold"
        _hover={{
          color: 'brand.400',
          textDecor: 'none',
        }}
      >
        <Box as="h1" fontSize="4xl" fontFamily="heading">
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
