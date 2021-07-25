import { PROVOKE_POPUP, REMOVE_POPUP, PROVOKE_POPUP_ONLY_MESSAGE } from "../constants"

export const popupMessageProducts = (item, message) => (dispatch) => {
    dispatch({
        type: PROVOKE_POPUP,
        payload: {
            _id: item._id,
            message
        }
    })
};

export const popupMessageRemove = (item) => (dispatch) => {
    dispatch({
        type: REMOVE_POPUP,
        payload: item
    })
};

export const popupMessage = (message) => (dispatch) => {
    dispatch({
        type: PROVOKE_POPUP_ONLY_MESSAGE,
        payload: {
            message: message
        }
    })
};