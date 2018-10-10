const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const cheatSheetTemplate = path.resolve(
    'src/templates/cheatSheetTemplate.js'
  )

  // returns promise that will start with this graphql query
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___updatedDate] }
        limit: 1000
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              createdDate
              updatedDate
              path
              title
              excerpt
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const sheets = result.data.allMarkdownRemark.edges

    // Create pages for each markdown file.
    sheets.forEach(({ node }, index) => {
      const prev = index === 0 ? null : sheets[index - 1].node
      const next =
        index === sheets.length - 1 ? null : sheets[index + 1].node
      createPage({
        path: node.frontmatter.path,
        component: cheatSheetTemplate,
        context: {
          prev,
          next
        }
      })
    })

    return sheets
  })
}
