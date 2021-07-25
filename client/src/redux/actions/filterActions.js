import { FILTER_BY_CLICK, FILTER_BY_PRICE_RANGE, FILTER_BY_VALUE, REMOVE_CHECKBOX_FILTER, RESET_FILTERS, SET_CHECKBOX_FILTER, SORT_BY_ALPHABET, SORT_BY_PRICE } from "../constants";

//filter products array by input value
export const filterByValue = (value) => ({
    type: FILTER_BY_VALUE,
    payload: value
});

// sort products by asc and desc orders though price 
export const sortByPrice = (direction) => ({
    type: SORT_BY_PRICE,
    payload: direction
});

//sort product by asc and desc orders though alphabet
export const sortByAlphabet = (direction) => ({
    type: SORT_BY_ALPHABET,
    payload: direction
});

// filter products through multiple checkbox
export const filterByCheckbox = (checkbox) => ({
    type: SET_CHECKBOX_FILTER,
    payload: checkbox
});

export const removeCheckbox = (checkbox) => ({
    type: REMOVE_CHECKBOX_FILTER,
    payload: checkbox
});

// filter by prince range
export const filterByRange = (payload) => ({
    type: FILTER_BY_PRICE_RANGE,
    payload
});
// filter products by click event
export const filterByClick = (payload) => ({
    type: FILTER_BY_CLICK,
    payload
});

export const resetFilters = () => (dispatch) => {
    dispatch({ type: RESET_FILTERS });
}