import React from 'react';
import { withRouter } from 'react-router-dom';
// @redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cart.actions';
// @reselect
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/selectors/cart.selectors';
// @components
import CartItem from '../Cart_item/Cart_item.component';
// @styles
import {
    CartDropdownContainer,
    CartItemsContainer,
    CartDropdownButton,
    EmptyMessageContainer
} from './Cart_dropdown.styles'

const handleClick = (history, dispatch) => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
}

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length
                    ? cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                    : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton
            onClick={() => handleClick(history, dispatch)}
        >
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));