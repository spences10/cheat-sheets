import {
  FormLabel,
  Input,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Fuse from 'fuse.js'
import { graphql, Link as GatsbyLink } from 'gatsby'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import SEO from 'react-seo-component'
import { GitHubCorner } from '../components/github-corner'
import { H2 } from '../components/md-page-elements'
import { SocialButtons } from '../components/social-buttons'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { ogImageUrl } from '../util/og-image-url-build'

export default function IndexPage({ data }) {
  const { nodes } = data.allMdx
  const [query, updateQuery] = useState('')

  const options = {
    includeScore: true,
    keys: ['frontmatter.title', 'tableOfContents.items.title'],
  }
  const fuse = new Fuse(nodes, options)

  const results = fuse.search(query)
  const searchResults = query
    ? results.map(result => result.item)
    : nodes

  function onSearch({ currentTarget = {} }) {
    updateQuery(currentTarget.value)
  }

  const {
    description,
    image,
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata()

  return (
    <>
      <SEO
        title={`Home`}
        titleTemplate={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Helmet encodeSpecialCharacters={false}>
        <meta
          property="og:image"
          content={ogImageUrl(authorName, 'cheatsheets.xyz', title)}
        />
        <meta
          name="twitter:image:src"
          content={ogImageUrl(authorName, 'cheatsheets.xyz', title)}
        />
      </Helmet>
      <GitHubCorner />
      <SocialButtons />
      <form>
        <FormLabel htmlFor="search" fontSize="xl">
          Search
        </FormLabel>
        <Input
          name="search"
          type="text"
          placeholder="Search the things!"
          value={query}
          onChange={onSearch}
          autoFocus
        />
      </form>
      <UnorderedList m="0">
        {searchResults.map(sheet => {
          const {
            id,
            frontmatter: { title },
            slug,
            tableOfContents: { items },
          } = sheet
          return (
            <ListItem key={id} listStyleType="none">
              <Link as={GatsbyLink} to={`/${slug}`}>
                <H2>{title}</H2>
              </Link>
              {items.map((item, count) => {
                if (count > 5) return
                return (
                  <Link
                    as={GatsbyLink}
                    to={`/${slug}${item.url}`}
                    key={item.url}
                    fontSize="xl"
                  >
                    <p>{item.title}</p>
                  </Link>
                )
              })}
            </ListItem>
          )
        })}
      </UnorderedList>
    </>
  )
}

export const indexQuery = graphql`
  {
    allMdx(sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        id
        frontmatter {
          title
          createdDate
          updatedDate
          published
        }
        tableOfContents
        slug
      }
    }
  }
`
