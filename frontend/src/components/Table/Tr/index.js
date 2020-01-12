import React from 'react';
import PropsTypes from 'prop-types';

import { CustomTr } from './styles';

export default function Tr({ children, ...rest }) {
  return <CustomTr {...rest}>{children}</CustomTr>;
}

Tr.propsTypes = {
  children: PropsTypes.oneOfType([PropsTypes.element, PropsTypes.string]),
};
