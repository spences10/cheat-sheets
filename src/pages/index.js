import { graphql } from 'gatsby';
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

  const results = !searchTerm
    ? nodes
    : nodes.filter(sheet => {
        // console.log('=====================');
        // console.log(
        sheet.frontmatter.title
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
        // );
        // console.log(sheet.headings);
        // console.log(sheet.fields);
        // // sheet.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        // console.log('=====================');
      });
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
      {/* <ul>
        {results.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}
      <Dump nodes={nodes} />
      <Dump data={data} />
    </Layout>
  );
};

export const indexQuery = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          createdDate
          updatedDate
          published
          cover
        }
        headings {
          value
          depth
        }
        fields {
          slug
        }
      }
    }
  }
`;
