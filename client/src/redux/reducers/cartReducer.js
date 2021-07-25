import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ITEM_WITH_QUANTITY, RESET_CART, SAVE_SHIPPING_ADDRESS, START_EDITING, STOP_EDITING, MANAGE_EDITING, CART_ITEM_DECREASE_QUANTITY } from "../constants";

const initialState = {
    edit: false,
    cartItems: [],
    shippingAddress: {},
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        // add to cart with quantity and size
        case CART_ADD_ITEM:
            const selectedItem = action.payload;
            const existItem = state.cartItems.find(item => item._id === selectedItem._id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === existItem._id ? selectedItem : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, selectedItem]
                }
            }

        // add to cart with quantity 
        case CART_ITEM_WITH_QUANTITY:
            const cartItemToAdd = action.payload;
            const existingItem = state.cartItems.find(item => item._id === cartItemToAdd._id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === cartItemToAdd._id ? { ...item, quantity: item.quantity + 1 } : item)
                }
            };

            return {
                ...state,
                cartItems: [...state.cartItems, { ...cartItemToAdd, quantity: 1 }]
            }

        // remove product from cart
        case CART_REMOVE_ITEM: {
            const product = action.payload;
            return {
                ...state,
                // remove if product's id doesn't match payload id
                cartItems: state.cartItems.filter(item => item._id !== product._id)
            }
        }

        // decrement of product and then remove
        case CART_ITEM_DECREASE_QUANTITY: {
            const cartPayload = action.payload;
            const existProduct = state.cartItems.find(item => item._id === cartPayload._id);
            if (existProduct.quantity === 1) {
                return {
                    cartItems: state.cartItems.filter(item => item._id !== cartPayload._id)
                }
            }

            return {
                ...state,
                cartItems: state.cartItems.map(item => item._id === cartPayload._id ? { ...item, quantity: item.quantity - 1 } : item)
            }
        }

        case RESET_CART: {
            return { ...state, cartItems: [] };
        }

        case SAVE_SHIPPING_ADDRESS: {
            return {
                ...state,
                shippingAddress: action.payload
            }
        }

        case MANAGE_EDITING: {
            return { ...state, edit: !state.edit };
        }

        case START_EDITING: {
            return { ...state, edit: true }
        }
        case STOP_EDITING: {
            return { ...state, edit: false }
        }

        default:
            return state;
    }
};

export { cartReducer };