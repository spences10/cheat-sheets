import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const SEO = ({
  article,
  title,
  description,
  image,
  pathname,
  keywords,
}) => {
  const {
    title: defaultTitle,
    titleTemplate,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
    twitterUsername,
    siteLanguage,
    siteLocale,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`,
  };

  return (
    <>
      <Helmet title={title}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <html lang={siteLanguage || 'en-gb'} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && (
          <meta property="og:title" content={seo.title} />
        )}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && (
          <meta property="og:image" content={seo.image} />
        )}
        <meta property="og:locale" content={siteLocale || 'en_gb'} />
        {seo.title && (
          <meta property="og:site_name" content={seo.title} />
        )}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && (
          <meta name="twitter:title" content={seo.title} />
        )}
        {seo.description && (
          <meta
            name="twitter:description"
            content={seo.description}
          />
        )}
        {seo.image && (
          <meta name="twitter:image" content={seo.image} />
        )}
        {keywords.length > 0 ? (
          <meta name="keywords" content={keywords.join(`, `)} />
        ) : null}
      </Helmet>
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
  siteLanguage: `en`,
  keywords: [],
};
