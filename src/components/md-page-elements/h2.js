import { Text } from '@chakra-ui/react'
import React from 'react'
import { HideLink } from './hide-link'

export const H2 = props => {
  return (
    <Text as="h2" fontSize="3xl" my="4" {...props}>
      <HideLink>{props.children}</HideLink>
    </Text>
  )
}
