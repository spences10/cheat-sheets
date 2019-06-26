import styled from 'styled-components';

export const StyledH2 = styled.h2`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  a {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    a {
      svg {
        visibility: visible;
      }
    }
  }
`;
