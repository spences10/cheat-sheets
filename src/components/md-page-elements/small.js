import React from 'react'
import styled from 'styled-components'

export const StyledSmall = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
`

export const Small = props => {
  return <StyledSmall {...props}>{props.children}</StyledSmall>
}
