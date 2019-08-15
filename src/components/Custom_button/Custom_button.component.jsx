import React from 'react';
// @styles
import { CustomButtonContainer } from './Custom_button.styles';

const CustomButton = ({ children, ...props }) => <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;

export default CustomButton;