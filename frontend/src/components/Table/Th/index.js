import React from 'react';
import PropsTypes from 'prop-types';

import { CustomTh } from './styles';
import { CustomTbody } from '../Tbody/styles';

export default function Th({ children, align, ...rest }) {
  return (
    <CustomTh align={align} {...rest}>
      {children}
    </CustomTh>
  );
}

Th.defaultProps = {
  align: 'left',
}

Th.prototype = {
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node,
  ]).isRequired,
  align: PropsTypes.string,
}
