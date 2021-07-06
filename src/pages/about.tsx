import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/Seo';
import About from '../components/About';
import SkillsList from '../components/SkillsList';
import Sections from '../components/Sections';
import { Page } from '../types/Page';

const components = {
  ContentfulShortText: About,
  ContentfulSkillsList: SkillsList,
};

type AboutPageProps = {
  data: Page;
};

const AboutPage = ({ data }: AboutPageProps) => {
  const { avatar, contentfulPage } = data;
  const { sections, metadata } = contentfulPage;

  return (
    <Fragment>
      <SEO title={metadata.title} keywords={[metadata.keywords]} />
      <Sections
        sections={sections}
        components={components}
        {...{ image: avatar?.childImageSharp?.gatsbyImageData }}
      />
    </Fragment>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    #About Page
    contentfulPage(contentful_id: { eq: "23SYEgU5fSM0p3cLmp54zm" }) {
      sections {
        ... on ContentfulShortText {
          name
          title
          content {
            content
          }
          __typename
        }
        ... on ContentfulSkillsList {
          name
          title
          skills {
            title
            description
          }
          __typename
        }
      }
      metadata {
        title
        keywords
      }
    }
    avatar: file(absolutePath: { regex: "/guy-about.jpg/" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
