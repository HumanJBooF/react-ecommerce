import React from 'react';
import PropTypes from 'prop-types';
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

CartItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    dropdown: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
}

export default CartItem;