const siteMetadata = {
  title: 'Cheat Sheets'
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/sheets`,
        name: 'sheets'
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs'
        ]
      }
    }
  ]
}
