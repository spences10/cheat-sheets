import { Text } from '@chakra-ui/react'
import React from 'react'
import { HideLink } from './hide-link'

export const H3 = props => {
  return (
    <Text fontSize="2xl" {...props}>
      <HideLink>{props.children}</HideLink>
    </Text>
  )
}
