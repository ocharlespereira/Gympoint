import React from 'react';
import PropsTypes from 'prop-types';

import { CustomTbody } from './styles';

export default function Tbody({ children, align, ...rest }) {
  return (
    <CustomTbody align={align} {...rest}>
      {children}
    </CustomTbody>
  );
}

Tbody.defaultProps = {
  align: 'left',
};

Tbody.PropsTypes = {
  children: PropsTypes.oneOfType([
    PropsTypes.arrayOf(PropsTypes.element),
    PropsTypes.element,
  ]).isRequired,
  align: PropsTypes.string,
};
