import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import SEO from 'react-seo-component';
import { Dump } from '../components/dump';
import { GitHubCorner } from '../components/github-corner';
import { Layout } from '../components/layout';
import { H3 } from '../components/page-elements';
import { SocialButtons } from '../components/social-buttons';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export default ({ data }) => {
  const {
    description,
    image,
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  const { nodes } = data.allMdx;
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  function filterBy(data, searchTerm) {
    const hasSearchTerm = value =>
      value.toLowerCase().includes(searchTerm);

    return data.reduce((matches, sheet) => {
      const headings = sheet.tableOfContents.items.filter(
        ({ title }) => hasSearchTerm(title)
      );
      return [sheet.frontmatter.title, sheet.fields.slug].some(
        hasSearchTerm
      ) || headings.length
        ? matches.concat(Object.assign(sheet, { headings }))
        : matches;
    }, []);
  }

  const result = filterBy(nodes, searchTerm);

  return (
    <Layout>
      <SEO
        title={title}
        description={description || 'nothin’'}
        image={image}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <GitHubCorner />
      <SocialButtons />
      <H3>{description}</H3>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <div>
        {result.map(({ id, frontmatter, headings, fields }) => {
          return (
            <div key={id}>
              <h1>{frontmatter.title}</h1>
              {headings.map(h => {
                return (
                  <h2 key={`${id}${h.title}`}>
                    <Link to={`${fields.slug}${h.url}`}>
                      {h.title}
                    </Link>
                  </h2>
                );
              })}
            </div>
          );
        })}
      </div>
      <Dump result={result} />
      <Dump data={data} />
    </Layout>
  );
};

export const indexQuery = graphql`
  {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          createdDate
          updatedDate
          published
          cover
        }
        tableOfContents
        fields {
          slug
        }
      }
    }
  }
`;
