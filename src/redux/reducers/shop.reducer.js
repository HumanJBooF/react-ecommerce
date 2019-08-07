import shop_data from '../../utils/shop_data';

const initialState = {
    collections: shop_data
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;