import React from 'react';
// @redux
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/actions/cart.actions'
// @styles
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './Checkout_item.styles'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, key }) => {
    const currencyFormat = num => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    const { description, name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer>
                {description ? description : name}
            </TextContainer>
            <QuantityContainer>
                <div className={`${(quantity === 1) ? 'grayed' : null}`} onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </QuantityContainer>
            <TextContainer>{currencyFormat(parseInt(price))}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10006;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);