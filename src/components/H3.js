import styled from 'styled-components';
import { HeaderLink } from './LinkedHeaders';

export const StyledH3 = styled.h3`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  ${() => HeaderLink}
`;
