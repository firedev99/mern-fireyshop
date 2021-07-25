import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS, USER_LOGOUT, USER_REGISTRATION_FAIL, USER_REGISTRATION_REQUEST, USER_REGISTRATION_SUCESS } from "../constants";

function loginReducer(state = {}, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

function registerReducer(state = { userInfo: null }, action) {
    switch (action.type) {
        case USER_REGISTRATION_REQUEST:
            return { ...state, loading: true };
        case USER_REGISTRATION_SUCESS:
            return { loading: false, userInfo: action.payload };
        case USER_REGISTRATION_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
};


export { loginReducer, registerReducer };