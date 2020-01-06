import React from 'react';
import PropsTypes from 'prop-types' 

import { CustomThead } from './styles';

export default function Thead({ children, align, ...rest }) {
  return (
    <CustomThead align={align} {...rest}>
      {children}
    </CustomThead>
  );
}

Thead.defaultProps = {
  align: 'left',
}


Thead.prototype = {
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node,
  ]).isRequired,
  align: PropsTypes.string,
}