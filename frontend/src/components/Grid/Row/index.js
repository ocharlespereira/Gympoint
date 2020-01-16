import React from 'react';
import PropTypes from 'prop-types';
import { CustomRow } from './styles';

export default function Row({ children, ...rest }) {
  return <CustomRow {...rest}>{children}</CustomRow>;
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
