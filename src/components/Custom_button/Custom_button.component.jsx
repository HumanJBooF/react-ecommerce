import React from 'react';
import PropTypes from 'prop-types';
// @styles
import './Custom_button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...rest }) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`}
        {...rest}
    >
        {children}
    </button>
);

CustomButton.propTypes = {
    isGoogleSignIn: PropTypes.bool,
    inverted: PropTypes.bool,
}

export default CustomButton;
