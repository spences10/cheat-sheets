import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import { GitHubCorner } from '../components/github-corner';
import { Layout } from '../components/layout';
import { useAnalytics } from '../contexts/event-tracking';
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

const StyledA = styled.a`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: ${props => props.theme.fontLight};
`;

export default ({ data, pageContext }) => {
  const { frontmatter, body, fields, tableOfContents } = data.mdx;
  const { title, createdDate, updatedDate, cover } = frontmatter;
  const {
    siteUrl,
    image,
    twitterUsername,
    authorName,
  } = useSiteMetadata();
  // const { prev, next } = pageContext
  // const { imageLink } = data.site.siteMetadata
  const tOCList =
    tableOfContents.items
      .map(h => {
        return h.title;
      })
      .join(', ') || 'nothing yo!';
  const fa = useAnalytics();
  return (
    <Layout>
      <SEO
        title={title}
        description={tOCList}
        image={!!cover ? `${siteUrl}/${cover}` : `${siteUrl}${image}`}
        pathname={`${siteUrl}${fields.slug}`}
        article={true}
        publishedDate={createdDate}
        modifiedDate={updatedDate}
        twitterUsername={twitterUsername}
        author={authorName}
      />
      <GitHubCorner />
      <StyledTitle>{title}</StyledTitle>
      <StyledDate>Created: {createdDate}</StyledDate>
      <StyledDate>Updated: {updatedDate}</StyledDate>
      <StyledA
        target="_blank"
        rel="noopener noreferrer"
        href={fields.editLink}
        onClick={() => {
          fa('6ETKCM0U');
        }}
      >
        Edit this page on GitHub
      </StyledA>
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
        cover
      }
      tableOfContents
      fields {
        slug
        editLink
      }
    }
  }
`;
