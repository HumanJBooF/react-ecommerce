import { combineReducers } from 'redux';
// @reducers
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})