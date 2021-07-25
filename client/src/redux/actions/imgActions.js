import { GOTO_INDEX } from "../constants";

export const selectImage = (index) => (dispatch) => {
    dispatch({
        type: GOTO_INDEX,
        payload: index
    })
}
