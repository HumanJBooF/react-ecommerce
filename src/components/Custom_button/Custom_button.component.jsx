import React from 'react';
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

export default CustomButton;
