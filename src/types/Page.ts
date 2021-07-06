type Metadata = {
  title: string;
  keywords: string;
};

type Avatar = {
  childImageSharp: { gatsbyImageData: Record<string, unknown> };
};

export type Page = {
  contentfulPage: {
    sections: [];
    metadata: Metadata;
  };
  avatar?: Avatar;
};
