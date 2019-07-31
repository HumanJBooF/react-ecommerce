import TYPES from '../constants/types';
const { SET_CURRENT_USER } = TYPES;

const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});

export {
    setCurrentUser
}