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

  function filterBy(data, searchTerm) {
    return data.filter(
      ({ frontmatter: { title }, headings, fields: { slug } }) => {
        const headingValues = headings.map(({ value }) => value);
        return [title, ...headingValues, slug].some(value =>
          value.toLowerCase().includes(searchTerm)
        );
      }
    );
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
      {/* <ul>
        {results.map(item => (
          <li>{item}</li>
        ))}
      </ul> */}
      <Dump result={result} />
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

const dataArr = [
  {
    frontmatter: {
      title: 'Alfred',
    },
    headings: [
      {
        value: 'Add custom search',
        depth: 2,
      },
      {
        value: 'Change the default search in Alfred',
        depth: 2,
      },
    ],
    fields: {
      slug: '/alfred/',
    },
  },
  {
    frontmatter: {
      title: 'Fish Shell',
    },
    headings: [
      {
        value: 'Aliases',
        depth: 2,
      },
      {
        value: 'Oh My Fish',
        depth: 2,
      },
      {
        value: 'Use nvm with fish',
        depth: 2,
      },
      {
        value: 'List out added aliases',
        depth: 2,
      },
    ],
    fields: {
      slug: '/fish/',
    },
  },
  {
    frontmatter: {
      title: 'Bash',
    },
    headings: [
      {
        value: 'Add an alias',
        depth: 2,
      },
      {
        value: 'Sort alphabetically 👌',
        depth: 2,
      },
      {
        value:
          'Open the SSH agent each time you open a new terminal.',
        depth: 2,
      },
    ],
    fields: {
      slug: '/bash/',
    },
  },
];
