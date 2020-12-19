import { Text } from '@chakra-ui/react'
import React from 'react'

export const H2 = ({ children }) => {
  return (
    <Text fontSize="3xl" my="4">
      {children}
    </Text>
  )
}
