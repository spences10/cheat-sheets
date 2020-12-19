import { ChakraProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout } from './components/layout'
import {
  A,
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  InlineCode,
  Li,
  Ol,
  P,
  Small,
  Ul,
} from './components/md-page-elements'
import { AnalyticsProvider } from './contexts/event-tracking'
import { theme } from './theme'

const components = {
  a: props => <A {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
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
  ol: props => <Ol {...props} />,
  ul: props => <Ul {...props} />,
  li: props => <Li {...props} />,
}

export const wrapPageElement = ({ element }) => (
  <>
    <Helmet>
      <script
        src={`${process.env.GATSBY_FATHOM_TRACKING_URL_CHEAT_SHEETS}/script.js`}
        spa="auto"
        site={process.env.GATSBY_FATHOM_TRACKING_ID_CHEAT_SHEETS}
        defer
      ></script>
    </Helmet>
    <ChakraProvider theme={theme} resetCSS>
      <AnalyticsProvider>
        <MDXProvider components={components}>
          <Layout>{element}</Layout>
        </MDXProvider>
      </AnalyticsProvider>
    </ChakraProvider>
  </>
)
