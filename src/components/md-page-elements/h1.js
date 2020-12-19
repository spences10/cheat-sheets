import { Text } from '@chakra-ui/react'
import React from 'react'

export const H1 = props => {
  return (
    <Text as="h1" fontSize="4xl" {...props}>
      {props.children}
    </Text>
  )
}
