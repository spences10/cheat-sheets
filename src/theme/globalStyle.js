import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#c0ff33',
  primaryAccent: '#663399',
  branding: '#f7e018',
  secondary: '#ff4242',
  background: '#b1b1cc',
  foreground: '#fefefe',
  border: '#044040',
  fontDark: '#202124',
  fontLight: '#5f6368',
  fontWhite: '#ffffff',
  h1: '"Josefin Slab", sans, sans-serif',
  h1Size: '40px',
  h2: '"Pontano Sans", sans, sans-serif',
  h2Size: '26px',
  h3: 'Maitree, sans, sans-serif',
  h3Size: '24px',
  p: 'Maitree, sans-serif',
  pSize: '21px',
};

export const GlobalStyle = createGlobalStyle`
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
    line-height: 34px;
    font-size: 21px;
    color: ${({ theme }) => theme.fontDark};
  }
`;
