import React from 'react';
// @styles
import { CartItemContainer, ItemDetailsContainer, CartItemImage } from './Cart_item.styles'

const CartItem = ({ item: { imageUrl, price, dropdown, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer className='item-details'>
            <div>{dropdown}</div>
            <div>{quantity} x ${price}</div>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;