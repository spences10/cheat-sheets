import { Link } from 'gatsby';
import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { H1 } from './page-elements';

export const SheetPreview = ({ hit }) => {
  const headings = hit.headings
    .map(h => {
      return h.value;
    })
    .join(', ');
  return (
    <Link to={hit.fields.slug}>
      <H1>
        <Highlight
          hit={hit}
          attribute="frontmatter.title"
          tagName="mark"
        />
      </H1>
      <p>
        <Highlight hit={hit} attribute={headings} tagName="mark" />
      </p>
    </Link>
  );
};
