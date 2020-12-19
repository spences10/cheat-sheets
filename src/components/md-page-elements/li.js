import { ListItem } from '@chakra-ui/react'
import React from 'react'

export const Li = props => {
  return (
    <ListItem fontSize="xl" ml="2">
      {props.children}
    </ListItem>
  )
}
