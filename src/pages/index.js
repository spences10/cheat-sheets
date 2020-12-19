import Fuse from 'fuse.js'
import { graphql } from 'gatsby'
import React, { useState } from 'react'

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
        <label>Search</label>
        <input type="text" value={query} onChange={onSearch} />
      </form>
      <ul>
        {searchResults.map(sheet => {
          const {
            id,
            frontmatter: { title },
            slug,
            tableOfContents: { items },
          } = sheet
          return (
            <li key={id}>
              <p>{title}</p>
              {items.map((item, count) => {
                if (count > 5) return
                return (
                  <div>
                    <p>{item.title}</p>
                    <p>{item.url}</p>
                  </div>
                )
              })}
            </li>
          )
        })}
      </ul>
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
