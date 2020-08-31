/** @jsx h */
import { MDXProvider } from '@mdx-js/preact'
import { h } from 'preact'
import { Helmet } from 'react-helmet'

export default ({ children, ...props }) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="style.css" />
      </Helmet>
      <header>
        <div>
          <h1>
            <a href="/">Toast Digital Garden Starter</a>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/garden">Garden</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <MDXProvider
        components={{
          h1: props => <h1 {...props} />,
          inlineCode: ({ children }) => (
            <code
              style={{
                backgroundColor: 'rgb(1,22,39)',
                padding: 3,
                margin: 3,
                borderRadius: 5,
                color: '#f0f0f0',
              }}
            >
              {children}
            </code>
          ),
          pre: props => {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: props.children.props.children,
                }}
              />
            )
          },
        }}
      >
        <div>{children}</div>
      </MDXProvider>
    </div>
  )
}
