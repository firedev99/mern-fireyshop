import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ITEM_WITH_QUANTITY, SAVE_SHIPPING_ADDRESS, START_EDITING, STOP_EDITING, RESET_CART, MANAGE_EDITING, CART_ITEM_DECREASE_QUANTITY } from "../constants";

// Add items to cart
// Assign qunatity and size property to state
export const addToCart = (item, quantity, size) => (dispatch, getState) => {
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            _id: item._id,
            name: item.name,
            imageSrc: item.imageSrc,
            price: item.price,
            countInStock: item.countInStock,
            quantity,
            size
        }
    })

    // set state to localstorage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// Add to cart without quantity paramerter
export const toCartWithQuantity = (item) => (dispatch, getState) => {
    dispatch({
        type: CART_ITEM_WITH_QUANTITY,
        payload: item
    })

    // set state to localstorage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// remove from cart through product id
export const removeFromCart = (item) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: item
    });

    // set state to localstorage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const decreaseQuantity = (item) => (dispatch, getState) => {
    dispatch({
        type: CART_ITEM_DECREASE_QUANTITY,
        payload: item
    })

    // set state to localstorage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const resetCart = () => (dispatch) => {
    dispatch({ type: RESET_CART });

    localStorage.removeItem('cartItems');
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_ADDRESS,
        payload: data
    });

    localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const manageEditing = () => (dispatch) => {
    dispatch({ type: MANAGE_EDITING });
};
export const startEditing = () => (dispatch) => {
    dispatch({ type: START_EDITING });
};

export const stopEditing = () => (dispatch) => {
    dispatch({ type: STOP_EDITING });
}
