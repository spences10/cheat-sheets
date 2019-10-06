import { Link } from 'gatsby';
import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import { H1 } from './page-elements';

export const SheetPreview = ({ hit }) => {
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

      {hit.tableOfContents.items.map((item, index) => (
        <p key={item.url}>
          <Link to={hit.fields.slug + item.url}>
            <Highlight
              hit={hit}
              attribute={`tableOfContents.items[${index}].title`}
              tagName="mark"
            />
          </Link>
        </p>
      ))}
    </>
  );
};
