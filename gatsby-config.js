require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
  // path: `.env.development`,
  // path: `.env.production`,
});

const siteMetadata = {
  title: `Cheat Sheets`,
  siteUrl: process.env.DEPLOY_URL || `http://localhost:9000/`,
  siteTitle: `Cheat Sheets`,
  titleTemplate: `%s · Modern web development hints and tips.`,
  description: `Every day commands and config used for modern web development.`,
  image: `/favicon.png`,
  twitterUsername: `@spences10`,
  faviconPng: `./static/favicon.png`,
  backgroundColour: `#f7f0eb`,
  themeColour: `#a2466c`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
};

const sheetsQuery = `
{
  allMdx {
    nodes {
      frontmatter {
        title
        createdDate
        updatedDate
      }
      tableOfContents
      fields {
        slug
      }
    }
  }
}
`;

const queries = [
  {
    query: sheetsQuery,
    transformer: ({ data }) => data.allMdx.nodes,
  },
];

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/sheets`,
        name: `sheets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // add to netlify Build environment variables
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        anonymize: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cheat Sheets`,
        short_name: `Cheat Sheets`,
        start_url: `/`,
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `standalone`,
        icon: siteMetadata.faviconPng,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
