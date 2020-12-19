import { Text } from '@chakra-ui/react'
import React from 'react'

export const H2 = props => {
  return (
    <Text as="h2" fontSize="3xl" my="4" {...props}>
      {props.children}
    </Text>
  )
}
