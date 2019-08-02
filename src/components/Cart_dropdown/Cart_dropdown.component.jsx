import React from 'react';
// @redux
import { connect } from 'react-redux';
// @components
import CustomButtom from '../Custom_button/Custom_button.component';
import CartItem from '../Cart_item/Cart_item.component';
// @styles
import './Cart_dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        {console.log(cartItems)}
        <div className='cart-items'>
            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
        </div>
        <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);