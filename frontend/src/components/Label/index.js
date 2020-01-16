import React from 'react';
import PropTypes from 'prop-types';

import { CustomLabel } from './styles';

export default function Label({ children }) {
  return <CustomLabel>{children}</CustomLabel>;
}

Label.propTypes = {
  children: PropTypes.string.isRequired,
};
