import React from 'react';
// @redux
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/actions/cart.actions'
// @styles
import './Checkout_item.styles.scss';


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, key }) => {
    const currencyFormat = num => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    const { description, name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item" />
            </div>
            <div className='name'>
                {description ? description : name}
            </div>
            <div className='quantity'>
                <div className={`${quantity === 1 ? 'grayed' : null} arrow`} onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <div className='value'>{quantity}</div>
                <div className='arrow' onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </div>
            <div className='price'>{currencyFormat(parseInt(price))}</div>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10006;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);