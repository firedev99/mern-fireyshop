import React from "react"
import { useDispatch, useSelector } from "react-redux"
// redux
import { popupMessage } from "../../redux/actions/statusActions"
import { ADD_SINGLE_FILE_TO_DNDLIST, ADD_SINGLE_FILE_TO_DROPZOE, MAKE_SINGLE_FILE_EMPTY } from "../../redux/constants"
// styled-components
import { Wrapper, DnDwrapper, SingleImage, FileHandlers } from "./styles/dndStyles"

export default function SignleFileDnD({ setValues, values }) {
    const { file } = useSelector(state => state.singleFileDnd);
    const dispatch = useDispatch();

    // handle file on enter
    const handleDragEnter = (event) => {
        event.preventDefault();
        dispatch({ type: ADD_SINGLE_FILE_TO_DROPZOE, inDropZone: true });
    };

    // handle file on drag over
    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        dispatch({ type: ADD_SINGLE_FILE_TO_DROPZOE, inDropZone: true });
    };

    // check for validation requirements
    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (typeof file !== 'undefined' && (validTypes.indexOf(file.type) === -1)) {
            dispatch(popupMessage('Please upload an image😶'))
            return false;
        }
        return true;
    };

    // handle file drop
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (validateFile(file)) {
            file.preview = URL.createObjectURL(file);
            dispatch({ type: ADD_SINGLE_FILE_TO_DNDLIST, file });
            dispatch({ type: ADD_SINGLE_FILE_TO_DROPZOE, inDropZone: false });
        }
    };

    // handle file on input field change
    const handleFileChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0]
        if (event.target.files.length !== 0 && (validateFile(file))) {
            file.preview = URL.createObjectURL(file);
            dispatch({ type: ADD_SINGLE_FILE_TO_DNDLIST, file });
        }
    };

    // clear file details
    const handleDelete = (event) => {
        event.preventDefault();
        dispatch({ type: MAKE_SINGLE_FILE_EMPTY })
        setValues({ ...values, imageSrc: '' });
    };

    return (
        <Wrapper>
            <button className="reset" onClick={handleDelete}>reset image</button>
            <DnDwrapper
                onDragEnter={(event) => handleDragEnter(event)}
                onDragOver={(event) => handleDragOver(event)}
                onDrop={(event) => handleDrop(event)}
            >
                {Object.keys(file).length !== 0 ? (
                    <SingleImage>
                        <img src={file.preview} alt='big-boy-dragger[0]' />
                    </SingleImage>
                ) : <h3>Drag your main image here</h3>}
            </DnDwrapper>
            <FileHandlers>
                <input type="file" id="single-file" content="'select main image'" onChange={handleFileChange} />
            </FileHandlers>
        </Wrapper>
    )
}