import React from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
// @reselect
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart.selectors';
// @components
import CheckoutItem from '../../components/Checkout_item/Checkout_item.component';
// @styles
import './Checkout.styles.scss';

const headerBlockTitles = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const currencyFormat = num => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            {headerBlockTitles.map((el, i) =>
                <div key={i} className='header-block'>
                    <div>{el}</div>
                </div>
            )}
        </div>
        {cartItems.map(cartItem =>
            <CheckoutItem
                key={cartItem.id}
                cartItem={cartItem}
            />
        )}
        <div className='total'>
            <div>TOTAL: {currencyFormat(parseInt(total))}</div>
        </div>
    </div>
)

CheckoutPage.propTypes = {
    cartItems: PropTypes.array,
    total: PropTypes.number
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);