import React from "react"
import { useDispatch, useSelector } from "react-redux"
// redux
import { popupMessage } from "../../redux/actions/statusActions"
import { ADD_TO_DNDLIST, ADD_TO_DROPZONE, MAKE_FILELIST_EMPTY } from "../../redux/constants";
// styled-components
import { DnDwrapper, MultipleImage, Images, Wrapper } from "./styles/dndStyles"

export default function MultipleFileDnD({ values, setValues }) {
    const { fileList } = useSelector(state => state.dndReducer);
    const dispatch = useDispatch();

    // handle on file enter 
    const handleDragEnter = (event) => {
        event.preventDefault();
        dispatch({ type: ADD_TO_DROPZONE, inDropZone: true });
    };

    // handle on file dragged over
    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
        dispatch({ type: ADD_TO_DROPZONE, inDropZone: true });
    };

    // check for validation requirements
    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (typeof file !== 'undefined' && (validTypes.indexOf(file.type) === -1)) {
            return false;
        }
        return true;
    };

    // clear file values
    const handleDelete = (event) => {
        event.preventDefault();
        dispatch({ type: MAKE_FILELIST_EMPTY });
        setValues({ ...values, sideImagesSrc: [] });
    }

    // create preview object for each files 
    const handleFiles = (files) => {
        for (let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                files[i]['preview'] = URL.createObjectURL(files[i]);
                dispatch({ type: ADD_TO_DNDLIST, payload: files[i] });
                dispatch({ type: ADD_TO_DROPZONE, inDropZone: false });
            } else {
                dispatch(popupMessage('Please insert a valid image type😶'))
            }
        }
    };

    // handle file drop
    const handleDrop = (event) => {
        event.preventDefault();
        let files = [...event.dataTransfer.files];
        if (files.length <= 6) {
            handleFiles(files);
        } else {
            dispatch(popupMessage('6 is the limit bruh😒'));
        }
    };

    // handle file on input filed change
    const handleFileChange = (event) => {
        event.preventDefault();
        let files = event.target.files;
        if (files.length <= 6) {
            handleFiles(files);
        } else {
            dispatch(popupMessage('6 is the limit bruh😒'));
        }
    };

    return (
        <Wrapper>
            <button className="reset" onClick={handleDelete}>reset image</button>
            <DnDwrapper
                onDragEnter={(event) => handleDragEnter(event)}
                onDragOver={(event) => handleDragOver(event)}
                onDrop={(event) => handleDrop(event)}
            >
                {fileList.length === 0 ? <h3>Drag your files here</h3> : (
                    <MultipleImage>
                        {fileList && fileList.map((file, index) => (
                            <Images key={`file-${index}`}>
                                <img src={file.preview} alt={file.type} />
                            </Images>
                        ))}
                    </MultipleImage>
                )}
            </DnDwrapper>
            <input className="multi" type="file" id="multiple-upload" multiple onChange={handleFileChange} />
        </Wrapper>
    )
}