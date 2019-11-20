import { graphql } from 'gatsby';
import React from 'react';
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
      <Dump datas={data} />
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
      }
    }
  }
`;
