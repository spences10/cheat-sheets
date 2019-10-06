import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import {
  Hits,
  InstantSearch,
  SearchBox,
} from 'react-instantsearch-dom';
import styled from 'styled-components';
import { Layout } from '../components/layout';
import { SheetPreview } from '../components/sheet-preview';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_ONLY_KEY
);

const StyledHits = styled(Hits)`
  li {
    list-style: none;
  }
  margin: 0;
  padding: 0;
`;

const Box = styled(SearchBox)`
  input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: solid 1px lightgray;
    font-size: 30px;
    font-family: ${props => props.theme.h1};
  }
  button {
    display: none;
  }
`;

export default () => (
  <Layout>
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}>
      <Box />
      <StyledHits hitComponent={SheetPreview} />
    </InstantSearch>

    {/* <SheetsList /> */}
  </Layout>
);
