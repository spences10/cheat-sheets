import styled from 'styled-components'
import { AutoLink } from './linked-headers'

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  ${AutoLink};
  margin: ${({ theme }) => theme.spacing[4]} 0;
`
