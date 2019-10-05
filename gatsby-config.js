require('dotenv').config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: `.env.production`,
});

const siteMetadata = {
  title: `Cheat Sheets`,
  siteUrl: `https://cheat-sheets.ss10.dev`,
  siteTitle: `Cheat Sheets`,
};

const sheetsQuery = `
{
  allMdx {
    nodes {
      fileAbsolutePath
      frontmatter {
        title
        createdDate
        updatedDate
        published
      }
      headings {
        value
        depth
      }
      tableOfContents
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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
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
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
