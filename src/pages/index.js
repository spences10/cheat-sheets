import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import {
  Hits,
  InstantSearch,
  SearchBox,
} from 'react-instantsearch-dom';
import { Layout } from '../components/layout';
import { SheetPreview } from '../components/sheet-preview';

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_ONLY_KEY
);

export default () => (
  <Layout>
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.ALGOLIA_INDEX_NAME}>
      <SearchBox />
      <Hits hitComponent={SheetPreview} />
    </InstantSearch>

    {/* <SheetsList /> */}
  </Layout>
);
