import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/layout';

const StyledTitle = styled.h1`
  color: ${props => props.theme.fontDark};
  font-family: ${props => props.theme.fontHeader};
`;

const StyledDate = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: ${props => props.theme.fontLight};
`;

const cheatSheetPage = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  // const { prev, next } = pageContext
  // const { imageLink } = data.site.siteMetadata
  return (
    <Layout>
      <StyledTitle>{frontmatter.title}</StyledTitle>
      <StyledDate>Created: {frontmatter.createdDate}</StyledDate>
      <StyledDate>Updated: {frontmatter.updatedDate}</StyledDate>
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
