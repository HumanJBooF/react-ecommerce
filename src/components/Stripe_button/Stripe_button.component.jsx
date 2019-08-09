import React from 'react';
import { withRouter } from 'react-router-dom';
// @stripe
import StripeCheckout from 'react-stripe-checkout';
// @utils
import showAlert from '../../utils/sweetAlert';
// @images
import Logo from '../../assets/img/logo/logo.png';

const StripeCheckoutButton = ({ price, history }) => {
    const priceInCents = price * 100;
    const publishKey = process.env.REACT_APP_STRIPE_PUBLISH_KEY;

    const currencyFormat = num => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    const onToken = token => {
        if (token) {
            showAlert([
                'Success!',
                `You bought ${currencyFormat(price)} worth of computer parts!`,
                'Go to storefront'
            ],
                true
            ).then(result => result ? history.push('/') : null);
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

export default withRouter(StripeCheckoutButton);