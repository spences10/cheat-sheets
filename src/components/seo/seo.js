import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../../hooks/siteMetadata';
import { Facebook } from './facebook';
import { Twitter } from './twitter';

export const SEO = ({
  article,
  title,
  description,
  image,
  pathname,
  publishedDate,
}) => {
  const {
    description: defaultDescription,
    imageLink: defaultImage,
    siteLanguage,
    siteLocale,
    siteUrl,
    title: defaultTitle,
    titleTemplate,
    twitterUsername,
    developerName,
    lastBuildDate,
  } = useSiteMetadata();

  const imagePath = `${siteUrl}${
    image.publicURL ? 'undefined' : defaultImage
  }`;

  // assign default values if needed
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${imagePath || defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`,
  };

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline: description,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Person',
      name: developerName,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: developerName,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: developerName,
    },
    publisher: {
      '@type': 'Person',
      name: developerName,
    },
    datePublished: '2019-10-12T13:28:00+01:00',
    dateModified: lastBuildDate,
    image: {
      '@type': 'ImageObject',
      url: `${seo.image}`,
    },
  };

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  let schemaArticle = null;

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: developerName,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: developerName,
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: developerName,
      },
      publisher: {
        '@type': 'Organization',
        name: developerName,
        logo: {
          '@type': 'ImageObject',
          url: `${seo.image}`,
        },
      },
      datePublished: publishedDate,
      dateModified: publishedDate,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    };
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 2,
    });
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="blog-scott-spence" content="Scott Spence Blog" />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={siteLocale}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitterUsername}
      />
    </>
  );
};

SEO.defaultProps = {
  siteLanguage: `en`,
  keywords: [],
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.array,
  pathname: PropTypes.string,
};
