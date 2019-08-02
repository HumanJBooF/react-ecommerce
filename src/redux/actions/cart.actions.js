import TYPES from '../constants/types';

const toggleCartHidden = () => ({
    type: TYPES.TOGGLE_CART_HIDDEN
});

const addItem = item => ({
    type: TYPES.ADD_ITEM,
    payload: item
});

export {
    toggleCartHidden,
    addItem
}