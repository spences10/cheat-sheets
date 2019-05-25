import { Link } from "gatsby";
import React from "react";
import { useSiteSheets } from "../hooks/useSiteSheets";
// import Layout from '../components/layout'

export const SheetsList = () => {
  const { edges } = useSiteSheets();
  return (
    <>
      {edges.map(({ node }, index) => (
        <ul key={index}>
          <Link to={node.fields.slug}>
            <h1>{node.frontmatter.title}</h1>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </Link>
        </ul>
      ))}
    </>
  );
};
