import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      {data.allMdx.edges.map(({ node }, index) => (
        <ul key={index}>
          <Link to={node.frontmatter.path}>
            <h1>{node.frontmatter.title}</h1>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </Link>
        </ul>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___createdDate], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            path
            createdDate(formatString: "YYYY MMMM Do")
          }
        }
      }
    }
  }
`;
