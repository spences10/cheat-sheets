/** @jsx h */
import { css } from 'linaria'
import { Fragment, h } from 'preact'
import { Helmet } from 'react-helmet'

const h1Styled = css`
  text-transform: uppercase;
  color: red;
`

export default props => {
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href="/styles/src/pages/index.css" />
      </Helmet>
      {props.posts.map(post => {
        let slug = post.slug.replace(`.md`, ``)
        return (
          <a href={slug} id={slug}>
            <h2>{post.title}</h2>
          </a>
        )
      })}
    </Fragment>
  )
}
