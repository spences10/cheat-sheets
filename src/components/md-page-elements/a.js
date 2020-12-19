import { Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

export const A = props => {
  return (
    <Link
      {...props}
      id={props.id}
      as={GatsbyLink}
      textDecor="underline"
      color="purple.500"
      fontSize="xl"
      to={props.href}
    >
      {props.children}
    </Link>
  )
}
