import React from 'react'
import styled from 'styled-components'
import { StyledLink } from '../pages'
import { H1 } from './md-page-elements'

const HeaderWrapper = styled.header`
  color: ${({ theme }) => theme.colors.blue[500]};
  position: relative;
  margin: 30px 0;
`

export const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <H1>
        <StyledLink to="/">{title}</StyledLink>
      </H1>
    </HeaderWrapper>
  )
}
