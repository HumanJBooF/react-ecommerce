import TYPES from '../constants/types';

const setCurrentUser = user => ({
    type: TYPES.SET_CURRENT_USER,
    payload: user
});

export {
    setCurrentUser
}