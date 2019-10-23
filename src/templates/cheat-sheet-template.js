import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import { Layout } from '../components/layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const StyledTitle = styled.h1`
  color: ${props => props.theme.fontDark};
  font-family: ${props => props.theme.h1};
`;

const StyledDate = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: ${props => props.theme.fontLight};
`;

export default ({ data, pageContext }) => {
  const { frontmatter, body, fields, tableOfContents } = data.mdx;
  const { siteUrl, image } = useSiteMetadata();
  // const { prev, next } = pageContext
  // const { imageLink } = data.site.siteMetadata
  const tOCList =
    tableOfContents.items
      .map(h => {
        return h.title;
      })
      .join(', ') || 'nothing yo!';
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={tOCList}
        image={image}
        pathname={`${siteUrl}${fields.slug}`}
        article={true}
        publishedDate={frontmatter.createdDate}
        modifiedDate={frontmatter.updatedDate}
      />
      <StyledTitle>{frontmatter.title}</StyledTitle>
      <StyledDate>Created: {frontmatter.createdDate}</StyledDate>
      <StyledDate>Updated: {frontmatter.updatedDate}</StyledDate>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

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
      tableOfContents
      fields {
        slug
      }
    }
  }
`;
