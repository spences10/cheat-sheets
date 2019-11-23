const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const cheatSheetTemplate = path.resolve(
    'src/templates/cheat-sheet-template.js'
  );

  // returns promise that will start with this graphql query
  return graphql(`
    {
      allMdx(sort: { fields: fields___slug, order: ASC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const sheets = result.data.allMdx.edges;

    // Create pages for each markdown file.
    sheets.forEach((post, index) => {
      const previous =
        index === sheets.length - 1 ? null : sheets[index + 1].node;
      const next = index === 0 ? null : sheets[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: cheatSheetTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
