import React from 'react';
// @components
import CustomButtom from '../Custom_button/Custom_button.component';
// @styles
import './Cart_dropdown.styles.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
)

export default CartDropDown;