import React from 'react';
import PropsTypes from 'prop-types';
import { CustomTable } from './styles';

export default function Table({ children, ...rest }) {
return <CustomTable {...rest}>{children}</CustomTable>;
}

Table.PropsTypes = {
    children: PropsTypes.oneOfType([
      PropsTypes.arrayOf(PropsTypes.element),
      PropsTypes.element,
    ]).isRequired,
  };