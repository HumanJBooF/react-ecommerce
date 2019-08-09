import React from 'react';
// @styles
import './Cart_item.styles.scss';

const CartItem = ({ item: { imageUrl, price, dropdown, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <div className='name'>{dropdown}</div>
            <div className='price'>{quantity} x ${price}</div>
        </div>
    </div>
)

export default CartItem;