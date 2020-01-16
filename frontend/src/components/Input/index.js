import React from 'react';

import { CustomInput } from './styles';

export default function Input({ ...rest }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CustomInput {...rest} />;
}
