import { ADD_ITEM_TO_WISHLIST, CLOSE_WISHLIST, OPEN_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from "../constants";

function wishlistReducer(state = { modal: false, wishlist: [] }, action) {
    switch (action.type) {
        case ADD_ITEM_TO_WISHLIST:
            let selectedProduct = action.payload;
            const existProduct = state.wishlist.find(item => item._id === selectedProduct._id);

            if (existProduct) {
                return {
                    ...state,
                    wishlist: state.wishlist.map(item => item._id === selectedProduct._id ? selectedProduct : item)
                }
            } else {
                return {
                    ...state,
                    wishlist: [...state.wishlist, selectedProduct]
                };
            }
        case REMOVE_ITEM_FROM_WISHLIST:
            let removeProduct = action.payload;
            return {
                ...state,
                wishlist: state.wishlist.filter(product => product._id !== removeProduct._id)
            };
        case OPEN_WISHLIST:
            return {
                ...state,
                modal: true,
            };
        case CLOSE_WISHLIST:
            return {
                ...state,
                modal: false,
            }
        default:
            return state;
    }
};

export { wishlistReducer };