import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '../components/Seo';
import Sections from '../components/Sections';
import ShortText from '../components/ShortText';

// import { Link, graphql } from "gatsby"
// import Bio from "../components/bio"
// import { rhythm } from "../styles/typography"

const components = {
  ContentfulShortText: ShortText,
};

function BlogIndex({ data }) {
  // const { data } = this.props
  // const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges

  const { contentfulPage } = data;
  const { sections, metadata } = contentfulPage;
  const { keywords, title } = metadata;

  return (
    <div>
      <SEO title={title} keywords={[keywords]} />
      <Sections sections={sections} components={components} />
      {/* <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })} */}
    </div>
  );
}

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    #Blog Page
    contentfulPage(contentful_id: { eq: "44xUPgtLm0HnjpMxsvMwZF" }) {
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

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
