import { createSelector } from 'reselect';

const selectCart = state => state.cart;

const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
);

const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accum, cartItem) => accum + cartItem.quantity * parseInt(cartItem.price), 0)
);

export {
    selectCartItems,
    selectCartHidden,
    selectCartItemsCount,
    selectCartTotal
}