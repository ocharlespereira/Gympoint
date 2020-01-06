import React from 'react';
import propstypes from 'prop-Types';

import { CustomTr } from './styles';

export default function Tr({ children, ...rest }) {
  return (
    <CustomTr {...rest}>
      {children}
    </CustomTr>
  );
}

Tr.propsTypes = {
  children: PropsTypes.oneOfType([PropsTypes.element, PropsTypes.string]),
};