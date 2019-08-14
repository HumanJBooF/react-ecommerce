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
import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, TotalContainer, ButtonTotal, StripeContainer, TestWarningContainer } from './Checkout.styles';



const CheckoutPage = ({ cartItems, total }) => {

    const headerBlockTitles = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];
    const currencyFormat = num => '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                {headerBlockTitles.map((el, i) =>
                    <HeaderBlock key={i} className='header-block'>
                        <div>{el}</div>
                    </HeaderBlock>
                )}
            </CheckoutHeader>
            {cartItems.map(cartItem =>
                <CheckoutItem
                    key={cartItem.id}
                    cartItem={cartItem}
                />
            )}
            <TotalContainer>
                <ButtonTotal>
                    TOTAL: {currencyFormat(parseInt(total))}
                    <StripeContainer>
                        <StripeCheckoutButton price={total} />
                    </StripeContainer>
                </ButtonTotal>
                <TestWarningContainer>
                    *This is for test purposes only. Stripe provides a CC number to use below.*
                <br />
                    *All other cards will cause an error/not get charged*
                <br />
                    4242 4242 4242 4242 - Exp: Anything time after now - CVV: 123
            </TestWarningContainer>
            </TotalContainer>
        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);