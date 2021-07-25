import { USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, GET_MYORDERS_REQUEST, GET_MYORDERS_SUCCESS, GET_MYORDERS_FAIL, GET_USERS_LIST_REQUEST, GET_USERS_LIST_SUCCESS, GET_USERS_LIST_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL, EDIT_SCREEN_OPEN, EDIT_SCREEN_CLOSE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from "../constants";

function userDetailsReducer(state = { user: {} }, action) {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

function userOrdersListReducer(state = { orders: [] }, action) {
    switch (action.type) {
        case GET_MYORDERS_REQUEST:
            return { loading: true }
        case GET_MYORDERS_SUCCESS:
            return { loading: false, orders: action.payload };
        case GET_MYORDERS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// admin & client functions mix (mainly update reducers)
function usersListReducer(state = { users: [] }, action) {
    switch (action.type) {
        case GET_USERS_LIST_REQUEST:
            return { loading: true };
        case GET_USERS_LIST_SUCCESS:
            return { loading: false, users: action.payload };
        case GET_USERS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

function userUpdateReducer(state = { modal: false }, action) {
    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return { loading: true };
        case USER_UPDATE_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload };
        case USER_UPDATE_FAIL:
            return { loading: false, success: false, error: action.payload };
        case EDIT_SCREEN_OPEN:
            return { ...state, modal: true };
        case EDIT_SCREEN_CLOSE:
            return { ...state, modal: false };
        default:
            return state;
    }
};

function userDeleteReducer(state = {}, action) {
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return { loading: true };
        case DELETE_USER_SUCCESS:
            return { loading: false, success: true };
        case DELETE_USER_FAIL:
            return { loading: false }
        default:
            return state;
    }
}


export { userDetailsReducer, userOrdersListReducer, usersListReducer, userUpdateReducer, userDeleteReducer };
