import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton } from './styles';
import colors from '~/styles/colors';

export default function Button({ color, label, icon, ...rest }) {
    return (
        <CustonButton color={color} {...rest}>
            {icon}
            {label}
        </CustonButton>
    );
}

CustonButton.defaultProps = {
    color: colors.primary,
    label: '',
    icon: null
};

CustomButton.PropTypes = {
    colors: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element,
};
