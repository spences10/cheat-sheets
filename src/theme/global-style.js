import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { defaults } from './default-config'

export const theme = {
  ...defaults,
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fontFamily.sans};
    font-size: 16px;
  }
  body {
    min-height: 100%;
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    color: ${({ theme }) => theme.colors.gray[900]};
    background: linear-gradient(#fff, #f2f2f2);
    -webkit-font-smoothing: antialiased;
  }
  .highlight {
    mark::before, 
    mark::after {
      clip-path: inset(100%);
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    mark::before {
      content: " [highlight start] ";
    }

    mark::after {
      content: " [highlight end] ";
    }
    background-color: ${({ theme }) => theme.colors.blue[300]};
  }
`
