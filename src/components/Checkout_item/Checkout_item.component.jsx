import React from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/actions/cart.actions'
// @styles
import './Checkout_item.styles.scss';
const CheckoutItem = ({ cartItem, clearItem }) => {
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
                <div className='arrow'>&#10094;</div>
                <div className='value'>{quantity}</div>
                <div className='arrow'>&#10095;</div>
            </div>
            <div className='price'>${parseInt(price).toFixed(2)}</div>
            <div
                className='remove-button'
                onClick={() => clearItem(cartItem)}
            >
                &#10006;
                </div>
        </div>
    )
}

CheckoutItem.propTypes = {
    cartItem: PropTypes.object,
    clearItem: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);