import { useStaticQuery, graphql } from 'gatsby';

function useToastsData() {
  const { contentfulToastList } = useStaticQuery(
    graphql`
      query {
        contentfulToastList(name: { eq: "Toast Greetings" }) {
          toasts {
            Evening
            Morning
            Afternoon
          }
          __typename
        }
      }
    `
  );

  return contentfulToastList;
}

export default useToastsData;
