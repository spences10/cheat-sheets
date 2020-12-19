import Fuse from 'fuse.js'
import { graphql } from 'gatsby'
import React from 'react'

export default function IndexPage({ data }) {
  const { nodes } = data.allMdx

  const Dump = props => (
    <div
      style={{
        fontSize: 20,
        border: '1px solid #efefef',
        padding: 10,
        background: 'white',
      }}
    >
      {Object.entries(props).map(([key, val]) => (
        <pre key={key}>
          <strong style={{ color: 'white', background: 'red' }}>
            {key} 💩
          </strong>
          {JSON.stringify(val, '', '  ')}
        </pre>
      ))}
    </div>
  )

  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['frontmatter.title', 'tableOfContents.items.title'],
  }
  const fuse = new Fuse(nodes, options)

  console.log('=====================')
  console.log(fuse.search('add custom search'))
  console.log('=====================')
  return (
    <>
      <div>yo!</div>
      <Dump poops={nodes} />
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
