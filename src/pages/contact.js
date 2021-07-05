import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '../components/Seo';
import Sections from '../components/Sections';
import ShortText from '../components/ShortText';
import Social from '../components/Social';

import { useSiteData } from '../hooks';

const components = {
  ContentfulShortText: ShortText,
};

function ContactPage({ data }) {
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
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
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
