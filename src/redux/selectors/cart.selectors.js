import { createSelector } from 'reselect';

const selectCart = state => state.cart;

const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((a, cartItem) => a + cartItem.quantity, 0)
)

export {
    selectCartItems,
    selectCartItemsCount
}