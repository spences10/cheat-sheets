import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            siteUrl
            gitHubUrl
            siteTitle
            titleTemplate
            description
            image
            twitterUsername
            faviconPng
            backgroundColour
            themeColour
            siteLanguage
            siteLocale
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
