import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import SEO from 'react-seo-component';
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
      ({
        frontmatter: { title },
        tableOfContents: { items },
        fields: { slug },
      }) => {
        const headingValues = items.map(({ title }) => title);
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
      <div>
        {result.map(item => {
          // console.log(item);
          return (
            <div>
              <h1>{item.frontmatter.title}</h1>
              <li>{item.fields.slug}</li>
              {item.tableOfContents.items.map(h => {
                return (
                  <h2>
                    <Link to={`${item.fields.slug}${h.url}`}>
                      {h.title}
                    </Link>
                  </h2>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* <Dump result={result} /> */}
      {/* <Dump data={data} /> */}
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
        tableOfContents
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
