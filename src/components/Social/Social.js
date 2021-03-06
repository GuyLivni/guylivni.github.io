import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaMedium,
  FaEnvelope,
} from 'react-icons/fa/';
import { animations } from '../../styles';

const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const containerAnimateStyles = ({ theme, animate }) =>
  animate &&
  css`
    animation: ${animations.fadeInUp} 0.6s 0.8s ease both;
  `;

const Container = styled('div')`
  ${containerStyles}${containerAnimateStyles}
`;

const Href = styled('a')`
  cursor: pointer;
  box-shadow: none;
  display: flex;
`;

const invertStyles = ({ theme, invert }) =>
  invert &&
  css`
    color: ${theme.colors.p500};
  `;

const iconStyles = ({ theme }) => css`
  display: flex;
  font-size: 20px;
  color: ${theme.colors.p600};
  margin: 0 10px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    transform ${theme.transitions.default};
  :hover {
    transform: translate3d(0px, -2px, 0px);
    color: ${theme.colors.p300};
  }
`;

const StyledIcon = styled('div')`
  ${iconStyles}${invertStyles}
`;

const titleStyles = ({ theme }) => css`
  color: ${theme.colors.p600};
  :after {
    content: '';
    background-color: ${theme.colors.p600};
    width: 8px;
    height: 1px;
    display: inline-block;
    position: relative;
    top: -4px;
    margin-left: 8px;

    @media ${theme.device.tablet} {
      margin-left: 12px;
      width: 26px;
    }
  }
`;

const Title = styled('div')`
  ${titleStyles}
`;

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
