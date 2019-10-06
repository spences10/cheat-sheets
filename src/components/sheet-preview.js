import { Link } from 'gatsby';
import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { H1 } from './page-elements';

export const SheetPreview = ({ hit }) => {
  return (
    <Link to={hit.fields.slug}>
      <H1>
        <Highlight
          hit={hit}
          attribute="frontmatter.title"
          tagName="mark"
        />
      </H1>
      {/* <p>
        <Highlight hit={hit} attribute="excerpt" tagName="mark" />
      </p> */}
      <p>
        <Highlight
          hit={hit}
          attribute="headings[0].value"
          tagName="mark"
        />
      </p>
      <p>
        <Highlight
          hit={hit}
          attribute="headings[1].value"
          tagName="mark"
        />
      </p>
      <p>
        <Highlight
          hit={hit}
          attribute="headings[2].value"
          tagName="mark"
        />
      </p>
      <p>
        <Highlight
          hit={hit}
          attribute="headings[3].value"
          tagName="mark"
        />
      </p>
      <p>
        <Highlight
          hit={hit}
          attribute="headings[4].value"
          tagName="mark"
        />
      </p>
    </Link>
  );
};
