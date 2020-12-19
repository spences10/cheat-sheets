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
import { H2 } from '../components/md-page-elements'

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

  return (
    <>
      <form>
        <FormLabel htmlFor="search">Search</FormLabel>
        <Input
          name="search"
          type="text"
          placeholder="Search the things!"
          value={query}
          onChange={onSearch}
        />
      </form>
      <UnorderedList>
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
                  <Link as={GatsbyLink} to={`/${slug}${item.url}`}>
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
