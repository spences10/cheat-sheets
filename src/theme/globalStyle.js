import { createGlobalStyle } from 'styled-components';

const fonts = () => {
  const list = [
    'Nunito:400,700|',
    'Poppins:400,700|',
    'Trirong:400,700|',
    'Rubik:400,700|',
    'Eczar:400,700|',
    'Taviraj:400,700|',
  ];
  return list.join('');
};

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=${fonts}');
  @import url('https://fonts-for-the-font-god.netlify.com/dank-mono.css?family=dm');

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100%;
    line-height: 1;
  }

  html {
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
    font-size: 15px;
  }
`;
