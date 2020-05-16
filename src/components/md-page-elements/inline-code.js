import React from 'react'
import styled, { css } from 'styled-components'
import 'victormono'

export const inlineCode = css`
  padding: 0 3px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  font-family: 'Victor Mono', monospace;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

const StyledCode = styled.code`
  ${inlineCode}
`

export const InlineCode = ({ children }) => {
  return <StyledCode>{children}</StyledCode>
}
