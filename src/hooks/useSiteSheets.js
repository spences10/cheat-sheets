import { graphql, useStaticQuery } from 'gatsby'

export const useSiteSheets = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query SITE_SHEETS_QUERY {
        allMdx(sort: { fields: slug, order: ASC }) {
          edges {
            node {
              id
              slug
              excerpt(pruneLength: 250)
              frontmatter {
                title
                createdDate(formatString: "YYYY MMMM Do")
                updatedDate(formatString: "YYYY MMMM Do")
                published
              }
            }
          }
        }
      }
    `
  )
  return allMdx
}
