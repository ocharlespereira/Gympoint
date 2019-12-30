import React from 'react';
import PropTypes from 'prop-types';

import { CustomTitle } from './styles';

export default function Title({ children, ...rest }) {
  return <CustomTitle {...rest}>{children}</CustomTitle>;
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
