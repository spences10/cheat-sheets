import styled from 'styled-components';
import { HeaderLink } from './linked-headers';

export const H3 = styled.h3`
  font-family: ${props => props.theme.h2};
  color: ${props => props.theme.fontDark};
  ${() => HeaderLink}
`;
