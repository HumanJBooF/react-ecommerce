import TYPES from '../constants/types';

const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;