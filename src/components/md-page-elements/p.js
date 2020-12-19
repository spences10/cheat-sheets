import { Text } from '@chakra-ui/react'
import React from 'react'

export const P = props => {
  const { children, ...rest } = props
  return (
    <Text color="gray.900" fontSize="xl" {...rest}>
      {children}
    </Text>
  )
}
