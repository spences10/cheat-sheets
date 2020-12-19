import { Box, Link, ListItem, UnorderedList } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import SEO from 'react-seo-component'
import { Small } from '../components/md-page-elements'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { ogImageUrl } from '../util/og-image-url-build'

export default ({ data }) => {
  const {
    frontmatter,
    body,
    slug,
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
  // const fa = useAnalytics()

  return (
    <>
      <SEO
        title={title}
        titleTemplate={siteTitle}
        description={excerpt}
        image={ogImageUrl(authorName, 'cheatsheets.xyz', title)}
        pathname={`${siteUrl}${slug}`}
        article={true}
        publishedDate={createdDate}
        modifiedDate={updatedDate}
        twitterUsername={twitterUsername}
        author={authorName}
      />
      {typeof tableOfContents.items === 'undefined' ? null : (
        <Box
          as="aside"
          position="fixed"
          left="calc(50% + 400px)"
          top="80px"
          maxH="50vh"
          w="310px"
          display="flex"
          flexDirection="column"
          boxShadow="lg"
          borderRadius="sm"
        >
          <Box as="h3" fontSize="2xl" m="3">
            Table of contents
          </Box>
          <UnorderedList
            overflow="hidden"
            overflowY="auto"
            mb="3"
            mr="4"
          >
            {tableOfContents.items.map(i => (
              <ListItem
                key={i.url}
                lineHeight="shorter"
                mb="3"
                mr="4"
                listStyleType="none"
              >
                <Link href={i.url} key={i.url}>
                  {i.title}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}
      <Box as="h1" fontSize="4xl">
        {title}
      </Box>
      <Small>
        <p>Created: {createdDate}</p>
        <p>Updated: {updatedDate}</p>
        {/* <A
          onClick={() => fa('6ETKCM0U')}
          target="_blank"
          rel="noopener noreferrer"
          href="#" // fields.editLink
        >
          Edit this page on GitHub
        </A> */}
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
      slug
      frontmatter {
        title
        createdDate(formatString: "YYYY MMMM Do")
        updatedDate(formatString: "YYYY MMMM Do")
      }
      tableOfContents
    }
  }
`
