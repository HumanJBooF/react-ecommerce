import React from 'react';
import { withRouter } from 'react-router-dom';
// @redux
import { connect } from 'react-redux';
import { clearCart } from '../../redux/actions/cart.actions';
// @stripe
import StripeCheckout from 'react-stripe-checkout';
// @utils
import showAlert from '../../utils/sweetAlert';
// @images
import Logo from '../../assets/img/logo/logo.png';

const StripeCheckoutButton = ({ price, history, clearCart }) => {
    const priceInCents = price * 100;
    const publishKey = process.env.REACT_APP_STRIPE_PUBLISH_KEY;

    const currencyFormat = num => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    const onToken = token => {
        if (token) {
            showAlert([
                'Success!',
                `You bought ${currencyFormat(price)} worth of computer parts!`,
                'Go to storefront'
            ], true)
                .then(result => {
                    if (result) {
                        clearCart();
                        history.push('/');
                    }
                });
        }
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Computer Parts-R-Us'
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is ${currencyFormat(price)}`}
            amount={priceInCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
});

export default connect(null, mapDispatchToProps)(withRouter(StripeCheckoutButton));