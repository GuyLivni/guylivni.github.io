import { useStaticQuery, graphql } from 'gatsby';

function useSiteData() {
  const { contentfulWebsite } = useStaticQuery(
    graphql`
      query {
        contentfulWebsite(name: { eq: "Site" }) {
          header {
            navigation {
              routes {
                path
                label
              }
            }
          }
          footer {
            copyrights
          }
          metadata {
            author
            title
            description
            siteUrl
            repoUrl
            socialLinks {
              label
              url
            }
          }
        }
      }
    `
  );

  return contentfulWebsite;
}

export default useSiteData;
