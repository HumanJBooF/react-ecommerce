import TYPES from '../constants/types';
const { SET_CURRENT_USER } = TYPES;

const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;