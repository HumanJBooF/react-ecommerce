import TYPES from "../constants/types";
import cartUtils from './utils/cart.utils';

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case TYPES.ADD_ITEM:
            return {
                ...state,
                cartItems: cartUtils.addItemToCart(state.cartItems, action.payload)
            }
        case TYPES.REMOVE_ITEM:
            return {
                ...state,
                cartItems: cartUtils.removeItemFromCart(state.cartItems, action.payload)
            }
        case TYPES.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case TYPES.CLEAR_ALL_ITEMS:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}

export default cartReducer;