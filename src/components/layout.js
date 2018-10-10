import React from 'react'
// import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'

const Layout = ({ children, data }) => {
  return (
    <React.Fragment>
      <Header title={data.site.siteMetadata.title} />
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
