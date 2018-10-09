import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children, data }) => {
  return (
    <React.Fragment>
      Site Title {data.site.siteMetadata.title}
      {children}
    </React.Fragment>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
