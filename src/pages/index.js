import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import { GitHubCorner } from '../components/github-corner';
import { Layout } from '../components/layout';
import { SocialButtons } from '../components/social-buttons';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: solid 1px lightgray;
  font-size: 32px;
  font-family: ${props => props.theme.h1};
  padding-left: 5px;
`;

const SheetTitle = styled.p`
  font-family: ${({ theme }) => theme.h1};
  font-size: 32px;
  font-weight: 700;
  margin: 25px 0;
`;

const StyledP = styled.p`
  font-family: ${({ theme }) => theme.p};
`;

const StyledDescription = styled.p`
  font-family: ${({ theme }) => theme.p};
  font-size: 26px;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.fontDark};
`;

const LinkTitle = styled(StyledLink)`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const LinkLink = styled(StyledLink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
        description={description}
        image={image}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <GitHubCorner />
      <SocialButtons />
      <StyledDescription>{description}</StyledDescription>
      <StyledInput
        aria-label="search input box"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {result.map(({ id, frontmatter, headings, fields }) => {
        return (
          <div key={id}>
            <SheetTitle>
              <LinkTitle to={fields.slug}>
                <Highlighter
                  searchWords={[searchTerm]}
                  autoEscape={true}
                  textToHighlight={frontmatter.title}
                  className="highlighted"
                >
                  {frontmatter.title}
                </Highlighter>
              </LinkTitle>
            </SheetTitle>
            {headings.map(h => {
              return (
                <StyledP key={`${id}${h.title}`}>
                  <LinkLink to={`${fields.slug}${h.url}`}>
                    <Highlighter
                      searchWords={[searchTerm]}
                      autoEscape={true}
                      textToHighlight={h.title}
                      className="highlighted"
                    >
                      {h.title}
                    </Highlighter>
                  </LinkLink>
                </StyledP>
              );
            })}
          </div>
        );
      })}
    </Layout>
  );
};

export const indexQuery = graphql`
  {
    allMdx(sort: { fields: fields___slug, order: ASC }) {
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
