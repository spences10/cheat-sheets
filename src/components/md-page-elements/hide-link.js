import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

export const HideLink = props => {
  const color = useColorModeValue(
    '#1A202C',
    'rgba(255, 255, 255, 0.92)'
  )
  const HideLinkStyle = styled.span`
    a {
      float: left;
      margin-left: -25px;
    }
    svg {
      visibility: hidden;
      height: 45px;
      width: 20px;
    }
    &:hover {
      svg {
        visibility: visible;
        height: 45px;
        width: 20px;
        fill: ${color};
      }
    }
  `

  return <HideLinkStyle {...props}>{props.children}</HideLinkStyle>
}
