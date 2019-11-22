import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import { Dump } from '../components/dump';
import { GitHubCorner } from '../components/github-corner';
import { Layout } from '../components/layout';
import { H1, H3 } from '../components/page-elements';
import { SocialButtons } from '../components/social-buttons';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: solid 1px lightgray;
  font-size: 30px;
  font-family: ${props => props.theme.h1};
  padding-left: 5px;
`;

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
      <StyledInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {result.map(({ id, frontmatter, headings, fields }) => {
        return (
          <div key={id}>
            <Link to={fields.slug}>
              <H1>{frontmatter.title}</H1>
            </Link>
            {headings.map(h => {
              return (
                <p key={`${id}${h.title}`}>
                  <Link to={`${fields.slug}${h.url}`}>{h.title}</Link>
                </p>
              );
            })}
          </div>
        );
      })}
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
