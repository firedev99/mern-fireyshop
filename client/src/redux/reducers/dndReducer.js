import { ADD_TO_DROPZONE, ADD_TO_DNDLIST, ADD_SINGLE_FILE_TO_DROPZOE, MAKE_FILELIST_EMPTY, MAKE_SINGLE_FILE_EMPTY, ADD_SINGLE_FILE_TO_DNDLIST } from "../constants";

const singleFileState = {
    inDropZone: false,
    file: ''
};

function singleFileDndReducer(state = singleFileState, action) {
    switch (action.type) {
        case ADD_SINGLE_FILE_TO_DROPZOE:
            return { ...state, inDropZone: action.inDropZone };
        case ADD_SINGLE_FILE_TO_DNDLIST:
            return { ...state, file: action.file };
        case MAKE_SINGLE_FILE_EMPTY:
            return { ...state, file: '' };
        default:
            return state;
    }
};


const multiFileState = {
    inDropZone: false,
    fileList: []
};

function dndReducer(state = multiFileState, action) {
    switch (action.type) {
        case ADD_TO_DROPZONE:
            return { ...state, inDropZone: action.inDropZone };
        case ADD_TO_DNDLIST:
            return { ...state, fileList: state.fileList.concat(action.payload) };
        case MAKE_FILELIST_EMPTY:
            return { ...state, fileList: [] };
        default:
            return state;
    }
};

export { singleFileDndReducer, dndReducer };