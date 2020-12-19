import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { GitHubCorner } from '../components/github-corner'
import { A, H2, H3, Small } from '../components/md-page-elements'
import { useAnalytics } from '../contexts/event-tracking'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { ogImageUrl } from '../util/og-image-url-build'

const Toc = styled.aside`
  position: fixed;
  left: calc(50% + 400px);
  top: 80px;
  max-height: 50vh;
  width: 310px;
  display: flex;
  flex-direction: column;
  border: solid 1px ${({ theme }) => theme.colors.blue[500]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: ${({ theme }) => theme.spacing[3]};
  margin: ${({ theme }) => theme.spacing[3]} 0;
  font-size: ${({ theme }) => theme.fontSize.sm};
  * {
    width: 100%;
  }
  a {
    color: var(
      --colour-on-background,
      ${({ theme }) => theme.colors.gray[900]}
    );
  }
  h3 {
    margin: 0 ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-family: ${({ theme }) => theme.fontFamily.serif};
  }
  ul {
    overflow: hidden;
    overflow-y: auto;
    margin: ${({ theme }) => theme.spacing[3]};
    &::-webkit-scrollbar {
      width: 11px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 14px;
    }
  }
  li {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
    margin-right: ${({ theme }) => theme.spacing[4]};
  }
  a {
    text-decoration: none;
  }
`

const Title = styled(H2)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue[500]};
`

export default ({ data }) => {
  const {
    frontmatter,
    body,
    fields,
    tableOfContents,
    excerpt,
  } = data.mdx
  const { title, createdDate, updatedDate } = frontmatter
  const {
    siteUrl,
    twitterUsername,
    authorName,
    siteTitle,
  } = useSiteMetadata()
  const fa = useAnalytics()
  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        image={ogImageUrl(authorName, 'cheatsheets.xyz', title)}
        pathname={`${siteUrl}${fields.slug}`}
        article={true}
        publishedDate={createdDate}
        modifiedDate={updatedDate}
        twitterUsername={twitterUsername}
        author={authorName}
      />
      <GitHubCorner />
      {typeof tableOfContents.items === 'undefined' ? null : (
        <Toc>
          <H3>Table of contents</H3>
          <ul>
            {tableOfContents.items.map(i => (
              <li key={i.url}>
                <a href={i.url} key={i.url}>
                  {i.title}
                </a>
              </li>
            ))}
          </ul>
        </Toc>
      )}
      <Title>{title}</Title>
      <Small>
        <p>Created: {createdDate}</p>
        <p>Updated: {updatedDate}</p>
        <A
          onClick={() => fa('6ETKCM0U')}
          target="_blank"
          rel="noopener noreferrer"
          href={fields.editLink}
        >
          Edit this page on GitHub
        </A>
      </Small>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query SheetsBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      excerpt(pruneLength: 250)
      body
      frontmatter {
        title
        createdDate(formatString: "YYYY MMMM Do")
        updatedDate(formatString: "YYYY MMMM Do")
      }
      tableOfContents
    }
  }
`
