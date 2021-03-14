import React from 'react';
import PropTypes from 'prop-types';
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaMedium,
  FaEnvelope,
} from 'react-icons/fa/';
import { Container, Href, StyledIcon, Title } from './Social.styled';

const ICON_MAP = {
  Github: FaGithub,
  Medium: FaMedium,
  Twitter: FaTwitter,
  LinkedIn: FaLinkedinIn,
  Email: FaEnvelope,
};

const mapLinksWithIcons = (links) =>
  links.map(({ label, url }) => {
    return {
      label,
      url: label === 'Email' ? `mailto:${url}` : url,
      Icon: ICON_MAP[label],
    };
  });

function Social({ links, showTitle, invert, animate }) {
  const icons = mapLinksWithIcons(links);

  return (
    <Container animate={animate}>
      {showTitle && <Title>follow me</Title>}
      {icons.map(({ Icon, url, label }, index) => (
        <Href
          aria-label={label}
          key={index}
          href={url}
          target="_blank"
          rel="noopener"
        >
          <StyledIcon invert={invert}>
            <Icon />
          </StyledIcon>
        </Href>
      ))}
    </Container>
  );
}

Social.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  showTitle: PropTypes.bool,
  invert: PropTypes.bool,
  animate: PropTypes.bool,
};

Social.defaultProps = {
  showTitle: false,
  invert: false,
};

export default Social;
