import { createGlobalStyle } from 'styled-components';

export const themes = {
  theme1: {
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
  },

  theme2: {
    primary: '#9166ff',
    primaryAccent: '#ecd444',
    branding: '#f7e018',
    secondary: '#eb238e',
    background: '#f9f9fd',
    foreground: '#fefefe',
    border: '#044040',
    fontDark: '#34434b',
    fontLight: '#586368',
    fontWhite: '#ffffff',
    fontHeader: 'Trirong, sans, sans-serif',
    fontBody: 'Rubik, sans-serif',
  },

  theme3: {
    primary: '#ff0198',
    primaryAccent: '#ffb617',
    branding: '#01c1d6',
    secondary: '#eb238e',
    background: '#e6e6e6',
    foreground: '#f7f0f0',
    border: '#054545',
    fontDark: '#034544',
    fontLight: '#596869',
    fontWhite: '#ffffff',
    fontHeader: 'Eczar, sans, sans-serif',
    fontBody: 'Taviraj, sans-serif',
  },
};

const fonts = () => {
  const list = [
    'Josefin+Sans:400,700|',
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
