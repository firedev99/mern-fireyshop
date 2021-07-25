import { PROVOKE_POPUP, PROVOKE_POPUP_ONLY_MESSAGE, REMOVE_POPUP } from "../constants";

function statusReducer(state = { flash: false, statusMessages: [] }, action) {
    switch (action.type) {
        case PROVOKE_POPUP:
            let productAdded = action.payload;
            return {
                ...state,
                flash: true,
                statusMessages: [...state.statusMessages, productAdded]
            }
        case PROVOKE_POPUP_ONLY_MESSAGE:
            let popupMessage = action.payload;
            const messageExists = state.statusMessages.find(msg => msg.message = popupMessage.message);
            if (messageExists) {
                return {
                    ...state,
                    flash: true,
                    statusMessages: state.statusMessages.map(msg => msg.message === messageExists.message ? popupMessage : msg)
                }
            } else {
                return {
                    ...state,
                    flash: true,
                    statusMessages: [...state.statusMessages, popupMessage]
                }
            }
        case REMOVE_POPUP:
            let productRemove = action.payload;
            return {
                ...state,
                flash: false,
                statusMessages: state.statusMessages.filter(item => item.index !== productRemove.index)
            }
        default:
            return state;
    }
};

export { statusReducer };