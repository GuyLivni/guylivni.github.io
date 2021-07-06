import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/Seo';
import Sections from '../components/Sections';
import ShortText from '../components/ShortText';
import Social from '../components/Social';

import { useSiteData } from '../hooks';

const components = {
  ContentfulShortText: ShortText,
};

type ContactPageProps = {
  data: {
    contentfulPage: {
      sections: [];
      metadata: { title: string; keywords: string };
    };
    avatar: { childImageSharp: { gatsbyImageData: Record<string, unknown> } };
  };
};

const ContactPage = ({ data }: ContactPageProps) => {
  const { metadata: siteMetadata } = useSiteData();
  const { contentfulPage } = data;
  const { sections, metadata } = contentfulPage;

  return (
    <Fragment>
      <SEO title={metadata.title} keywords={[metadata.keywords]} />
      <Sections sections={sections} components={components} />
      <Social links={siteMetadata.socialLinks} />
    </Fragment>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query {
    #Contact Page
    contentfulPage(contentful_id: { eq: "5mGc05hRKj8C4TgAsoA65n" }) {
      sections {
        ... on ContentfulShortText {
          name
          title
          content {
            content
          }
          __typename
        }
      }
      metadata {
        title
        keywords
      }
    }
  }
`;
