import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from './components/Section';

const SectionsContainer = styled('div')`
  width: 100%;
`;

function Sections({ sections, components, ...rest }) {
  return (
    <SectionsContainer>
      {sections.map((section, index) => {
        const { __typename } = section;
        const Component = components[__typename];

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
}

Sections.propTypes = {
  sections: PropTypes.array.isRequired,
  components: PropTypes.object.isRequired,
};

export default Sections;
