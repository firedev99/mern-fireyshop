import { ADD_ITEM_TO_WISHLIST, CLOSE_WISHLIST, OPEN_WISHLIST, REMOVE_ITEM_FROM_WISHLIST } from "../constants";

export const addProductToWishlist = (product) => (dispatch, getState) => {
    dispatch({
        type: ADD_ITEM_TO_WISHLIST,
        payload: {
            _id: product._id,
            name: product.name,
            imageSrc: product.imageSrc,
            price: product.price,
        }
    });

    // store state items to localstorage
    localStorage.setItem('wishlist', JSON.stringify(getState().wishlist.wishlist));
}

export const removeProductFromWishlist = (product) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_FROM_WISHLIST,
        payload: product
    })
    // store state items to localstorage
    localStorage.setItem('wishlist', JSON.stringify(getState().wishlist.wishlist));
}

export const openModal = () => ({
    type: OPEN_WISHLIST,
});

export const closeModal = () => ({
    type: CLOSE_WISHLIST,
})