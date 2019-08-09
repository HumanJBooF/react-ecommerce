import React from 'react';
// @redux
import { connect } from 'react-redux';
// @reselect
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/selectors/cart.selectors';
// @components
import CheckoutItem from '../../components/Checkout_item/Checkout_item.component';
import StripeCheckoutButton from '../../components/Stripe_button/Stripe_button.component';
// @styles
import './Checkout.styles.scss';

const headerBlockTitles = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

const currencyFormat = num => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

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
            <div className='total-price'>TOTAL: {currencyFormat(parseInt(total))}</div>
            <div className='test-warning'>
                *This is for test purposes only. Stripe provides a CC number to use below.*
                <br />
                *All other cards will cause an error/not get charged*
                <br />
                4242 4242 4242 4242 - Exp: Anything time after now - CVV: 123
            </div>
            <div className='stripe'>
                <StripeCheckoutButton price={total} />
            </div>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);