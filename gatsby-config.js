require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = {
  title: `Cheat Sheets`,
  siteUrl: `https://cheatsheets.xyz`,
  gitHubUrl: `https://github.com/spences10/cheat-sheets`,
  siteTitle: `Cheat Sheets`,
  titleTemplate: `%s · Modern web development hints and tips.`,
  description: `Everyday commands, config, hints and tips used for modern web development.`,
  image: `/favicon.png`,
  twitterUsername: `@spences10`,
  authorName: `Scott Spence`,
  faviconPng: `./static/favicon.png`,
  backgroundColour: `#f7f0eb`,
  themeColour: `#a2466c`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `@chakra-ui/gatsby-plugin`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/sheets`,
        name: `sheets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Jost`,
          `Open Sans`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
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
}
