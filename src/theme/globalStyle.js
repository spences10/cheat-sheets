import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#f2ff49',
  primaryAccent: '#645dd7',
  branding: '#f7e018',
  secondary: '#ff4242',
  background: '#b1b1cc',
  foreground: '#fefefe',
  border: '#044040',
  fontDark: '#202124',
  fontLight: '#5f6368',
  fontWhite: '#ffffff',
  fontHeader: '"Josefin Sans", sans, sans-serif',
  fontBody: 'Poppins, sans-serif',
};

const fonts = () => {
  const list = ['Josefin+Sans:400,700|', 'Poppins:400,700|'];
  return list.join('');
};

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=${fonts}');
  @import url('https://fonts-for-the-font-god.netlify.com/dank-mono.css?family=dm');

  *, *:before, *:after {
    box-sizing: border-box;
  }
  /* use for debugging only!! */
  /* * {
    outline: 1px solid red !important;
  } */
  html {
    min-height: 100%;
    background: linear-gradient(#fff, #f2f2f2);
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    line-height: 1.3125;
  }
`;
