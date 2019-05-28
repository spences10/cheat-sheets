import styled from 'styled-components';

const inlineCode = `
  background-color: #fafafa;
  font-family: dm;
`;

export const Code = styled.code`
  ${inlineCode}
`;

export const StyledP = styled.p`
  code {
    ${inlineCode};
  }
`;
