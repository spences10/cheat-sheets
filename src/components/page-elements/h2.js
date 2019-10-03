import styled from 'styled-components';
import { HeaderLink } from './linked-headers';

export const H2 = styled.h2`
  font-family: ${props => props.theme.h2};
  color: ${props => props.theme.fontDark};
  ${() => HeaderLink}
`;
