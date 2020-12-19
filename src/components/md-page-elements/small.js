import { Text } from '@chakra-ui/react'
import React from 'react'

export const Small = props => {
  return (
    <Text fontSize="xs" {...props}>
      {props.children}
    </Text>
  )
}
