import { Text } from '@chakra-ui/react'
import React from 'react'

export const P = props => {
  const { children, ...rest } = props
  return (
    <Text fontSize="xl" {...rest}>
      {children}
    </Text>
  )
}
