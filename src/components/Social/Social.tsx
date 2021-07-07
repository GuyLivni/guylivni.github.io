import React from 'react';
import { IconType } from 'react-icons';
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaMedium,
  FaEnvelope,
} from 'react-icons/fa/';
import { SocialLinks, Label } from '../../types/Social';
import { Container, Href, StyledIcon, Title } from './Social.styled';

const ICON_MAP: IconMap = {
  Github: FaGithub,
  Medium: FaMedium,
  Twitter: FaTwitter,
  LinkedIn: FaLinkedinIn,
  Email: FaEnvelope,
};

type IconMap = Record<Label, IconType>;

const mapLinksWithIcons = (links: SocialLinks) =>
  links.map(({ label, url }) => ({
    label,
    url: label === 'Email' ? `mailto:${url}` : url,
    Icon: ICON_MAP[label],
  }));

type Props = {
  links: SocialLinks;
  showTitle?: boolean;
  invert?: boolean;
  animate?: boolean;
};

const Social = ({
  links,
  showTitle = false,
  invert = false,
  animate,
}: Props) => {
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
};

export default Social;
