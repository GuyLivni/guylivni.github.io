import React from 'react';
import styled from 'styled-components';

import Section from './components/Section';

const SectionsContainer = styled('div')`
  width: 100%;
`;

type SectionProps = {
  __typename: string;
};

type SectionsProps = {
  sections: SectionProps[];
  components: Record<string, React.ElementType>;
};

const Sections = ({ sections, components, ...rest }: SectionsProps) => {
  return (
    <SectionsContainer>
      {sections.map((section, index) => {
        const { __typename } = section;
        const Component = components?.[__typename];

        if (!Component) {
          return null;
        }

        return (
          <Section key={index}>
            <Component {...{ ...section, ...rest }} />
          </Section>
        );
      })}
    </SectionsContainer>
  );
};

export default Sections;
