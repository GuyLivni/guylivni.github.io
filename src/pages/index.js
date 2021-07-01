import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Hero from '../components/Hero';
import SEO from '../components/Seo';
import Sections from '../components/Sections';

import { useSiteData } from '../hooks';

const components = {
  ContentfulHero: Hero,
};

const IndexPage = ({ location, data }) => {
  const { contentfulPage } = data;
  const { metadata: pageMetadata, sections } = contentfulPage;
  const { metadata: siteMetadata } = useSiteData();

  return (
    <Fragment>
      <SEO title={pageMetadata.title} keywords={[pageMetadata.keywords]} />
      <Sections
        sections={sections}
        components={components}
        {...{
          socialLinks: siteMetadata.socialLinks,
        }}
      />
    </Fragment>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    #Home Page
    contentfulPage(contentful_id: { eq: "1xqW3gYNBTryNOCsliNEqk" }) {
      sections {
        ... on ContentfulHero {
          name
          titlePrefix
          title
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
