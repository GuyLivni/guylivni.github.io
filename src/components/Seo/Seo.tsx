import React from 'react';
import Helmet from 'react-helmet';
import { useSiteData } from '../../hooks';

type SEOProps = {
  description?: string;
  lang?: string;
  meta?: [];
  keywords?: string[];
  title: string;
};

const SEO = ({
  description,
  lang = 'en',
  meta = [],
  keywords = [],
  title,
}: SEOProps) => {
  const { metadata } = useSiteData();
  const metaDescription = description || metadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${metadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: metadata.siteUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
