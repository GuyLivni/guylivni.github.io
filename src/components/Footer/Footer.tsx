import React from 'react';
import Social from '../Social';
import { Container, Content, FooterInner, CopyRights } from './Footer.styled';
import { SocialLinks } from '../../types/Social';

type Props = {
  children: React.ReactNode;
  copyrights: string;
  socialLinks: SocialLinks;
};

const Footer = ({ children, copyrights, socialLinks }: Props) => (
  <Container>
    <Content>{children}</Content>
    <FooterInner>
      <CopyRights>{`© ${new Date().getFullYear()} ${copyrights}`}</CopyRights>
      <Social links={socialLinks} invert />
    </FooterInner>
  </Container>
);

export default Footer;
