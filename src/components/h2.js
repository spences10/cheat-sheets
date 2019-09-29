import styled from 'styled-components';
import { HeaderLink } from './linked-headers';

export const StyledH2 = styled.h2`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  ${() => HeaderLink}
`;
