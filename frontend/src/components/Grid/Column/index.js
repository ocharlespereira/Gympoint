import React from 'react';
import PropTypes from 'prop-types';
import { CustomColumn } from './styles';

export default function Column({ children, ...rest }) {
  return <CustomColumn {...rest}>{children}</CustomColumn>;
}

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
