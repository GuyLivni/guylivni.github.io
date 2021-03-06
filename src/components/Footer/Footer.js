import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Social from '../Social';

const containerStyles = ({ theme }) => css`
  padding-left: 0;
  z-index: 1;
  position: relative;
  margin-bottom: 55px;

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 100px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${theme.colors.p700};
    z-index: -1;
  }

  @media ${theme.device.tablet} {
    padding-left: 100px;
    margin-bottom: 0;
  }
`;

const Container = styled('div')`
  ${containerStyles}
`;

const contentStyles = ({ theme }) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.p100};
  transition: all ${theme.transitions.default};
  width: 100%;
  border-top: 1px solid ${theme.colors.n100};
  min-height: 200px;
  padding: 20px;

  @media ${theme.device.tablet} {
    align-items: flex-start;
    margin: 0;
  }
`;

const Content = styled('div')`
  ${contentStyles}
`;

const footerInnerStyles = ({ theme }) => css`
  height: 80px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media ${theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 70px;
    height: 100px;
  }
`;

const FooterInner = styled('div')`
  ${footerInnerStyles}
`;

const copyrightsStyles = ({ theme }) => css`
  text-align: center;
  color: ${theme.colors.p500};
  font-size: 12px;
  font-weight: ${theme.fontWeight.standard};
  margin: 10px 0 0 0;
  opacity: 0.7;

  @media ${theme.device.tablet} {
    margin: 0;
  }
`;

const CopyRights = styled('p')`
  ${copyrightsStyles}
`;

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
