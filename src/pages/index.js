import {
  Box,
  FormLabel,
  Input,
  Link,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import Fuse from 'fuse.js'
import { graphql, Link as GatsbyLink } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import Highlighter from 'react-highlight-words'
import SEO from 'react-seo-component'
import { SocialButtons } from '../components/social-buttons'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { ogImageUrl } from '../util/og-image-url-build'

export default function IndexPage({ data }) {
  const { nodes } = data.allMdx
  const [query, updateQuery] = useState('')

  const options = {
    includeScore: true,
    keys: ['frontmatter.title', 'tableOfContents.items.title'],
    includeMatches: true,
    threshold: 0.3,
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

  const searchRef = useRef(null)
  useEffect(() => {
    searchRef.current.focus()
  }, [])
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
      <SocialButtons />
      <Box as="form" mt="5" mb="8">
        <FormLabel htmlFor="search" fontSize="xl">
          Search:
        </FormLabel>
        <Input
          name="search"
          id="search"
          type="text"
          placeholder="Search the things!"
          value={query}
          onChange={onSearch}
          ref={searchRef}
        />
      </Box>
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
              <Link
                as={GatsbyLink}
                to={`/${slug}`}
                textDecor="underline"
                fontWeight="bold"
                _hover={{
                  color: 'brand.400',
                  textDecor: 'none',
                }}
              >
                <Box as="h2" fontSize="3xl" my="4">
                  <Highlighter
                    searchWords={[query]}
                    autoEscape={true}
                    textToHighlight={title}
                    highlightClassName="highlight"
                  >
                    {title}
                  </Highlighter>
                </Box>
              </Link>
              <UnorderedList m="0">
                {items.map(item => {
                  return (
                    <ListItem
                      key={`${slug}-${item.url}`}
                      listStyleType="none"
                    >
                      {item.title
                        .toLowerCase()
                        .includes(query.toLowerCase()) ? (
                        <Link
                          as={GatsbyLink}
                          to={`/${slug}${item.url}`}
                          fontSize="xl"
                          display="block"
                          my="4"
                        >
                          <Highlighter
                            searchWords={[query]}
                            autoEscape={true}
                            textToHighlight={item.title}
                            highlightClassName="highlight"
                          >
                            <p>{item.title}</p>
                          </Highlighter>
                        </Link>
                      ) : null}
                    </ListItem>
                  )
                })}
              </UnorderedList>
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
