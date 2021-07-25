import { START_EDITING } from '../constants';

export const startEditing = () => (dispatch) => {
    dispatch({ type: START_EDITING });
};
