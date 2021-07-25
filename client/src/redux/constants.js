// Product reducer constants 
// Product List
export const PRODUCT_LIST_FETCH_REQ = 'PRODUCT_LIST_FETCH_REQ';
export const PRODUCT_LIST_FETCH_SUCCESS = 'PRODUCT_LIST_FETCH_SUCCESS';
export const PRODUCT_LIST_FETCH_FAIL = 'PRODUCT_LIST_FETCH_FAIL';
// Specific product details 
export const PRODUCT_DETAILS_FETCH_REQ = 'PRODUCT_DETAILS_FETCH_REQ';
export const PRODUCT_DETAILS_FETCH_SUCCESS = 'PRODUCT_DETAILS_FETCH_SUCCESS';
export const PRODUCT_DETAILS_FETCH_FAIL = 'PRODUCT_DETAILS_FETCH_FAIL';
// Create a product 
export const PRODUCT_CREATE_REQUEST = 'PRODUCT_CREATE_REQUEST';
export const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS';
export const PRODUCT_CREATE_FAIL = 'PRODUCT_CREATE_FAIL';
export const PRODUCT_CREATE_RESET = 'PRODUCT_CREATE_RESET';
// Update infos of a product 
export const PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST';
export const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS';
export const PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_FAIL';
// Delete a product
export const PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST';
export const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS';
export const PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL';
// Porduct filters 
// filter by input value
export const FILTER_BY_VALUE = 'FILTER_BY_VALUE';
// filter by ascending and descending orders
export const SORT_BY_ALPHABET = 'SORT_BY_ALPHABET';
export const SORT_BY_PRICE = 'SORT_BY_PRICE'
// apply multiple filters through checkbox
export const SET_CHECKBOX_FILTER = 'SET_CHECKBOX_FILTER';
// remove an specific checkbox through splice
export const REMOVE_CHECKBOX_FILTER = 'REMOVE_CHECKBOX_FILTER';
// filter by click
export const FILTER_BY_CLICK = 'FILTER_BY_CLICK';
// filter by price 
export const FILTER_BY_PRICE_RANGE = 'FILTER_BY_PRICE_RANGE';
export const RESET_FILTERS = 'RESET_FILTERS';

// product img constant
// go to clicked image index
export const GOTO_INDEX = "GOTO_INDEX";
// End of Product reducer constants 



// Cart reducer constants
export const CART_ADD_ITEM = 'CART_ADD_ITEM';
// Direct remove
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
// Add product to cart without quantity parameter
export const CART_ITEM_WITH_QUANTITY = 'CART_ITEM_WITH_QUANTITY';
// Decrease quantity and then remove
export const CART_ITEM_DECREASE_QUANTITY = 'CASE_DECREASE_QUANTITY';
export const RESET_CART = 'RESET_CART';

// shipping inlineprop editing functionality
export const MANAGE_EDITING = 'MANAGE_EDITING';
export const START_EDITING = 'START_EDITING';
export const STOP_EDITING = 'STOP_EDITING';
export const SAVE_SHIPPING_ADDRESS = 'SAVE_SHIPPING_ADDRESS';
// End of Cart reducer constants 





// Wishlist reducer constants
export const ADD_ITEM_TO_WISHLIST = 'ADD_ITEM_TO_WISHLIST';
export const REMOVE_ITEM_FROM_WISHLIST = 'REMOVE_ITEM_FROM_WISHLIST';
// handle wishlist modal constants
export const OPEN_WISHLIST = 'OPEN_WISHLIST';
export const CLOSE_WISHLIST = 'CLOSE_WISHLIST';
// End of Wish reducer constants 



// Status reducer constants 
export const PROVOKE_POPUP = 'PROVOKE_POPUP';
export const REMOVE_POPUP = 'REMOVE_POPUP';
export const PROVOKE_POPUP_ONLY_MESSAGE = 'PROVOKE_POPUP_ONLY_MESSAGE';
// End of Status reducer constants 



// Auth reducer constants 
// user login 
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

// user registration
export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST';
export const USER_REGISTRATION_SUCESS = 'USER_REGISTRATION_SUCESS';
export const USER_REGISTRATION_FAIL = 'USER_REGISTRATION_FAIL';
// End of Auth reducer constants 



// User reducer constants 
// get user details
export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST';
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL';

// update user details (Admin also)
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL';
export const USER_UPDATE_RESET = 'USER_UPDATE_RESET';

// edit screen update constants
export const EDIT_SCREEN_OPEN = 'EDIT_SCREEN_OPEN';
export const EDIT_SCREEN_CLOSE = 'EDIT_SCREEN_CLOSE';

// admin
// get all users list constants
export const GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST';
export const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
export const GET_USERS_LIST_FAIL = 'GET_USERS_LIST_FAIL';

// delete user constants
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

// user orders constants
export const GET_MYORDERS_REQUEST = 'GET_MYORDERS_REQUEST';
export const GET_MYORDERS_SUCCESS = 'GET_MYORDERS_SUCCESS';
export const GET_MYORDERS_FAIL = 'GET_MYORDERS_FAIL';
// End of User reducer constants 





// Order reducer constants 
// create order 
export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST';
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';
export const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL';
// Get specific order details 
export const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST';
export const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS';
export const ORDER_DETAILS_FAIL = 'ORDER_DETAILS_FAIL';
// Get all orders list (Admin)
export const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST';
export const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS';
export const ORDER_LIST_FAIL = 'ORDER_LIST_FAIL';
// Update delivery to delivered
export const ORDER_UPDATE_REQUEST = 'ORDER_UPDATE_REQUEST';
export const ORDER_UPDATE_SUCCESS = 'ORDER_UPDATE_SUCCESS';
export const ORDER_UPDATE_FAIL = 'ORDER_UPDATE_FAIL';
// End of Order reducer constants


// DnD reducer constants 
// Single Drag & Drop
export const ADD_SINGLE_FILE_TO_DROPZOE = 'ADD_SINGLE_FILE_TO_DROPZOE';
export const ADD_SINGLE_FILE_TO_DNDLIST = 'ADD_SINGLE_FILE_TO_DNDLIST';
export const MAKE_SINGLE_FILE_EMPTY = 'MAKE_SINGLE_FILE_EMPTY';
export const ADD_TO_DROPZONE = 'ADD_TO_DROPZONE';
export const ADD_TO_DNDLIST = 'ADD_TO_DNDLIST';
export const MAKE_FILELIST_EMPTY = 'MAKE_FILELIST_EMPTY';
