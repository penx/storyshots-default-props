import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ container: Container, a, b }) => <Container>{a} {b}</Container>;

Footer.propTypes = {
  container: PropTypes.elementType,
  a: PropTypes.string,
};

Footer.defaultProps = {
  container: 'div',
  a: 'A',
  b: 'B',
};

export default Footer;
