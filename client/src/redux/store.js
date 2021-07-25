import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// reducers
import { productListReducer, productDetailsReducer, productImgReducer, productCreateReducer, productUpdateReducer, productDeleteReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";
import { statusReducer } from "./reducers/statusReducer";
import { loginReducer, registerReducer } from "./reducers/authReducer";
import { createOrderReducer, orderDeliveryReducer, orderDetailsReducer, orderListReducer } from "./reducers/orderReducer";
import { userDetailsReducer, userOrdersListReducer, usersListReducer, userUpdateReducer, userDeleteReducer } from "./reducers/userReducer";
import { singleFileDndReducer, dndReducer } from "./reducers/dndReducer";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    imgReducer: productImgReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    status: statusReducer,
    userLogin: loginReducer,
    userRegister: registerReducer,
    orders: createOrderReducer,
    orderDetails: orderDetailsReducer,
    orderList: orderListReducer,
    orderDelivery: orderDeliveryReducer,
    userDetails: userDetailsReducer,
    userOrders: userOrdersListReducer,
    usersReducer: usersListReducer,
    deletedUser: userDeleteReducer,
    userUpdate: userUpdateReducer,
    singleFileDnd: singleFileDndReducer,
    dndReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const wishlistFromStorage = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const userShippingAddress = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : null;
const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: userShippingAddress },
    wishlist: { wishlist: wishlistFromStorage },
    userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;