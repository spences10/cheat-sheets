import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { useSiteSheets } from '../hooks/useSiteSheets';
import { H1 } from './page-elements';

const SheetsListWrapper = styled.main`
  li {
    list-style: none;
  }
`;

export const SheetsList = () => {
  const { edges } = useSiteSheets();
  return (
    <SheetsListWrapper>
      {edges.map(({ node }, index) => (
        <li key={index}>
          <Link to={node.fields.slug}>
            <H1>{node.frontmatter.title}</H1>
            {/* <span style={{ display: 'flex' }}>
              <p>Created: {node.frontmatter.createdDate}</p>
              <p>Updated: {node.frontmatter.updatedDate}</p>
            </span> */}
          </Link>
        </li>
      ))}
    </SheetsListWrapper>
  );
};
