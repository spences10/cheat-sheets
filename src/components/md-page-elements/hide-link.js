import styled from '@emotion/styled'

export const HideLink = styled.span`
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
    }
  }
`
