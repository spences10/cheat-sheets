import { Text } from '@chakra-ui/react'
import React from 'react'

export const Blockquote = ({ children }) => {
  return (
    <Text
      borderLeft="5px solid #ccc"
      pl="5px"
      fontStyle="italic"
      fontSize="xl"
      m="20px"
      opacity="0.7"
    >
      {children}
    </Text>
  )
}
