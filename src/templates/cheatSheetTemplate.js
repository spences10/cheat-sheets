import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Layout } from '../components/layout';

const cheatSheetPage = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  // const { prev, next } = pageContext
  // const { imageLink } = data.site.siteMetadata
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>Created: {frontmatter.createdDate}</p>
      <p>Updated: {frontmatter.updatedDate}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default cheatSheetPage;

export const query = graphql`
  query SheetsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 250)
      body
      frontmatter {
        title
        createdDate(formatString: "YYYY MMMM Do")
        updatedDate(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
