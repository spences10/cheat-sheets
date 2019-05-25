const siteMetadata = {
  title: "Cheat Sheets"
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-autolink-headers` }
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/sheets`,
        name: "sheets"
      }
    }
  ]
};
