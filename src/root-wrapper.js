import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  InlineCode,
} from './components/md-page-elements';
import { AnalyticsProvider } from './contexts/event-tracking';
import { theme } from './theme/globalStyle';

// import { Dump } from './src/utils/helpers';
// components is its own object outside of render so that the references to
// components are stable
const components = {
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
      );
    }
    // it's possible to have a pre without a code in it
    return <pre />;
  },
  'p.inlineCode': InlineCode,
  'p.code': InlineCode,
  code: InlineCode,
  'p.blockquote': Blockquote,
  blockquote: Blockquote,
  wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <AnalyticsProvider>
      <MDXProvider components={components}>{element}</MDXProvider>
    </AnalyticsProvider>
  </ThemeProvider>
);
