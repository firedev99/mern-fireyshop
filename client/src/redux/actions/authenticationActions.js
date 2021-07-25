import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS, USER_LOGOUT, USER_REGISTRATION_FAIL, USER_REGISTRATION_REQUEST, USER_REGISTRATION_SUCESS } from "../constants"

export const setLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        // authorization bearer
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // make a post request to /api/users/login
        const { data } = await axios.post('/api/users/login', { email, password }, config);
        dispatch({
            type: USER_LOGIN_SUCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};


export const setRegister = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTRATION_REQUEST });
        // authorization bearer
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // make a post request to /api/users
        const { data } = await axios.post('/api/users', { name, email, password }, config);
        dispatch({
            type: USER_REGISTRATION_SUCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_REGISTRATION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

// logout user
export const setLogout = () => (dispatch) => {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem('userInfo');
};