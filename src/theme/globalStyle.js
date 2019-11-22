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
  h1: '"Josefin Slab", sans, sans-serif',
  h1Size: '32px',
  h2: '"Pontano Sans", sans, sans-serif',
  h2Size: '24px',
  h3: 'Maitree, sans, sans-serif',
  h3Size: '18.7167px',
  p: 'Maitree, sans-serif',
  pSize: '16px',
};

const fonts = () => {
  const list = [
    'Josefin+Slab:400,700|',
    'Maitree:400,700|',
    'Pontano+Sans:400:700|',
  ];
  return list.join('');
};

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=${fonts}');

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
    /* scroll-behavior: smooth; */
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    line-height: 1.3125;
    font-size: 16px;
  }
`;
