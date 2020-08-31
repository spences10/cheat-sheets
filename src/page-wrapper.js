/** @jsx h */
import { MDXProvider } from '@mdx-js/preact'
import { css } from 'linaria'
import { Fragment, h } from 'preact'
import { Helmet } from 'react-helmet'

let components = {
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
}

let wrapper = css`
  max-width: 570px;
  margin: 0 auto;
`

export default ({ children, ...props }) => {
  return (
    <main className={wrapper}>
      <Helmet>
        <link rel="stylesheet" href="/styles/src/page-wrapper.css" />
      </Helmet>
      <header>
        <div>
          <h1>
            <a href="/">Cheat Sheets</a>
          </h1>
        </div>
      </header>
      <MDXProvider components={components}>
        <div>
          {props.title ? (
            <Fragment>
              <h2>{props.title}</h2>
              <p>Created: {props.createdDate}</p>
              <p>Updated: {props.updatedDate}</p>
            </Fragment>
          ) : null}
          {children}
        </div>
      </MDXProvider>
    </main>
  )
}
