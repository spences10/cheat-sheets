import { Link } from '@chakra-ui/react'
import React from 'react'

export const A = props => {
  return (
    <Link
      {...props}
      id={props.id}
      textDecor="underline"
      color="purple.500"
      fontSize="xl"
      to={props.href}
    >
      {props.children}
    </Link>
  )
}
