import React from 'react';
import PropTypes from 'prop-types';
import { CustomContainer } from './styles';

export default function Container({ children, ...rest }) {
  return <CustomContainer {...rest}>{children}</CustomContainer>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
