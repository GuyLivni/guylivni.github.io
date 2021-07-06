import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/Seo';
import Sections from '../components/Sections';
import ShortText from '../components/ShortText';
import { Page } from '../types/Page';

const components = {
  ContentfulShortText: ShortText,
};

type NotFoundPageProps = {
  data: Page;
};

const NotFoundPage = ({ data }: NotFoundPageProps) => {
  const { contentfulPage } = data;
  const { sections } = contentfulPage;

  return (
    <Fragment>
      <SEO title="404: Not Found" />
      <Sections sections={sections} components={components} />
    </Fragment>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    #Not Found Page
    contentfulPage(contentful_id: { eq: "6iWKFWMB8etBQryXgs5O8D" }) {
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
    }
  }
`;
