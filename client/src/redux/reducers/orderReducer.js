import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL, ORDER_UPDATE_REQUEST, ORDER_UPDATE_SUCCESS, ORDER_UPDATE_FAIL } from "../constants";

function createOrderReducer(state = {}, action) {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return { loading: true };
        case ORDER_CREATE_SUCCESS:
            return { loading: false, success: true, order: action.payload };
        case ORDER_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

const initialState = {
    loading: true,
    orderItems: [],
    shippingAddress: {},
};

function orderDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return { ...state, loading: true };
        case ORDER_DETAILS_SUCCESS:
            return { loading: false, order: action.payload };
        case ORDER_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

function orderListReducer(state = { orders: [] }, action) {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true };
        case ORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

function orderDeliveryReducer(state = {}, action) {
    switch (action.type) {
        case ORDER_UPDATE_REQUEST:
            return { loading: true };
        case ORDER_UPDATE_SUCCESS:
            return { loading: false, success: true, id: action.payload };
        case ORDER_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export { createOrderReducer, orderDetailsReducer, orderListReducer, orderDeliveryReducer };