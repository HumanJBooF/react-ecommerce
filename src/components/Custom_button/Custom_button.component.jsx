import React from 'react';
// @styles
import './Custom_button.styles.scss';

const CustomButton = ({ children, ...rest }) => (
    <button className='custom-button' {...rest}>{children}</button>
);

export default CustomButton;
