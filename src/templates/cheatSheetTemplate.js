import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const cheatSheetPage = ({ data /*, pageContext */ }) => {
  const post = data.markdownRemark
  // const { prev, next } = pageContext
  // const { imageLink } = data.site.siteMetadata
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.createdDate}</p>
      <p>{post.frontmatter.updatedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default cheatSheetPage

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        title
        path
        createdDate(formatString: "YYYY MMMM Do")
        updatedDate(formatString: "YYYY MMMM Do")
      }
    }
  }
`
