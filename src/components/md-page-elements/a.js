import React from 'react'
import styled from 'styled-components'
import { inlineCode } from './inline-code'

export const StyledA = styled.a`
  text-decoration: underline;
  color: var(
    --colour-on-background,
    ${({ theme }) => theme.colors.gray[900]}
  );
  text-decoration-color: var(
    --colour-on-background,
    ${({ theme }) => theme.colors.gray[900]}
  );
  &:hover {
    opacity: 0.5;
  }
  code {
    ${inlineCode}
  }
`

export const A = props => {
  return (
    <StyledA {...props} id={props.id}>
      {props.children}
    </StyledA>
  )
}
