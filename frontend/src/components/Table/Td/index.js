import React from 'react';
import PropsTypes from 'prop-types';

import { CustomId } from './styles';

export default function Td({ children, align, ...rest }) {
  return (
    <CustomId align={align} {...rest}>
      {children}
    </CustomId>
  );
}

Td.defaultProps = {
  align: 'left',
};

Td.PropsTypes = {
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.node),
    PropsTypes.node,
  ]).isRequired,
  align: PropsTypes.string,
};
