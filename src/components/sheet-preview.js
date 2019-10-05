import { Link } from 'gatsby';
import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import styled from 'styled-components';
import { H1 } from './page-elements';

const SheetsListWrapper = styled.main`
  li {
    list-style: none;
  }
`;

export const SheetPreview = ({ hit }) => {
  return (
    <SheetsListWrapper>
      <Link to={hit.fields.slug}>
        <H1>{hit.frontmatter.title}</H1>
        {/* <Dump hit={hit} /> */}
        <Highlight hit={hit} attribute="title" tagName="mark" />
        {/* <span style={{ display: 'flex' }}>
              <p>Created: {node.frontmatter.createdDate}</p>
              <p>Updated: {node.frontmatter.updatedDate}</p>
            </span> */}
      </Link>
    </SheetsListWrapper>
  );
};
