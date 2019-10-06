import { Link } from 'gatsby';
import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { H1 } from './page-elements';

export const SheetPreview = ({ hit }) => {
  const hrefsArr = [];
  hit.tableOfContents.items.map(i => {
    return hrefsArr.push(i.url);
  });

  return (
    <>
      <Link to={hit.fields.slug}>
        <H1>
          <Highlight
            hit={hit}
            attribute="frontmatter.title"
            tagName="mark"
          />
        </H1>
      </Link>

      <p>
        <Link to={hit.fields.slug + hrefsArr[0]}>
          <Highlight
            hit={hit}
            attribute="tableOfContents.items[0].title"
            tagName="mark"
          />
        </Link>
      </p>
      <p>
        <Link to={hit.fields.slug + hrefsArr[1]}>
          <Highlight
            hit={hit}
            attribute="tableOfContents.items[1].title"
            tagName="mark"
          />
        </Link>
      </p>
      <p>
        <Link to={hit.fields.slug + hrefsArr[2]}>
          <Highlight
            hit={hit}
            attribute="tableOfContents.items[2].title"
            tagName="mark"
          />
        </Link>
      </p>
      <p>
        <Link to={hit.fields.slug + hrefsArr[3]}>
          <Highlight
            hit={hit}
            attribute="tableOfContents.items[3].title"
            tagName="mark"
          />
        </Link>
      </p>
      <p>
        <Link to={hit.fields.slug + hrefsArr[4]}>
          <Highlight
            hit={hit}
            attribute="tableOfContents.items[4].title"
            tagName="mark"
          />
        </Link>
      </p>
    </>
  );
};
