import TYPES from '../constants/types';

const toggleCartHidden = () => ({
    type: TYPES.TOGGLE_CART_HIDDEN
});

const addItem = item => ({
    type: TYPES.ADD_ITEM,
    payload: item
});

const clearItemFromCart = item => ({
    type: TYPES.CLEAR_ITEM_FROM_CART,
    payload: item
});

export {
    toggleCartHidden,
    addItem,
    clearItemFromCart
}