import { Text } from '@chakra-ui/react'
import React from 'react'

export const H3 = props => {
  return (
    <Text fontSize="2xl" {...props}>
      {props.children}
    </Text>
  )
}
