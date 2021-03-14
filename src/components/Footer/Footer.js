import React from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import { Container, Content, FooterInner, CopyRights } from './Footer.styled';

function Footer({ children, copyrights, socialLinks }) {
  return (
    <Container>
      <Content>{children}</Content>
      <FooterInner>
        <CopyRights>{`© ${new Date().getFullYear()} ${copyrights}`}</CopyRights>
        <Social links={socialLinks} invert />
      </FooterInner>
    </Container>
  );
}

Footer.propTypes = {
  children: PropTypes.object.isRequired,
  copyrights: PropTypes.string.isRequired,
  socialLinks: PropTypes.array.isRequired,
};

export default Footer;
