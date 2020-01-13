import React from 'react';
import PropTypes from 'prop-types';
import colors from '~/styles/colors';

import { CustomButtonLikeLink } from './styles';

export default function ButtonLikeLink({ children, color, ...rest }) {
  return (
    <CustomButtonLikeLink color={color} {...rest}>
      <span>{children}</span>
    </CustomButtonLikeLink>
  );
}

CustomButtonLikeLink.defaltProps = {
  color: colors.primary,
};

CustomButtonLikeLink.PropTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  color: PropTypes.string,
};
