import styled from 'styled-components';
import { HeaderLink } from './LinkedHeaders';

export const StyledH2 = styled.h2`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  ${() => HeaderLink}
`;
