import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from './components/layout'
import {
  A,
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  InlineCode,
  P,
  Small,
} from './components/md-page-elements'
import { AnalyticsProvider } from './contexts/event-tracking'
import { theme } from './theme/global-style'

const components = {
  a: props => <A {...props} />,
  h1: H1,
  h2: H2,
  h3: H3,
  pre: ({ children: { props } }) => {
    // if there's a codeString and some props, we passed the test
    if (props.mdxType === 'code') {
      return (
        <div style={{ position: 'relative' }}>
          <Code
            codeString={props.children.trim()}
            language={
              props.className &&
              props.className.replace('language-', '')
            }
            {...props}
          />
        </div>
      )
    }
    // it's possible to have a pre without a code in it
    return <pre />
  },
  'p.inlineCode': props => <InlineCode {...props} />,
  'p.code': props => <InlineCode {...props} />,
  code: props => <InlineCode {...props} />,
  'p.blockquote': props => <Blockquote {...props} />,
  blockquote: props => <Blockquote {...props} />,
  wrapper: ({ children }) => <>{children}</>,
  p: props => <P {...props} />,
  small: props => <Small {...props} />,
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <AnalyticsProvider>
      <MDXProvider components={components}>
        <Layout>{element}</Layout>
      </MDXProvider>
    </AnalyticsProvider>
  </ThemeProvider>
)
