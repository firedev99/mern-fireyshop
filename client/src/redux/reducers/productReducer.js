import { PRODUCT_LIST_FETCH_REQ, PRODUCT_LIST_FETCH_SUCCESS, PRODUCT_LIST_FETCH_FAIL, FILTER_BY_VALUE, SORT_BY_PRICE, SORT_BY_ALPHABET, FILTER_BY_CLICK, SET_CHECKBOX_FILTER, FILTER_BY_PRICE_RANGE, RESET_FILTERS, GOTO_INDEX, PRODUCT_DETAILS_FETCH_REQ, PRODUCT_DETAILS_FETCH_SUCCESS, PRODUCT_DETAILS_FETCH_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_CREATE_RESET, PRODUCT_UPDATE_SUCCESS, PRODUCT_UPDATE_FAIL } from '../constants';

const initialState = {
    products: [],
    filteredProducts: [],
    filters: []
};

function productListReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_LIST_FETCH_REQ:
            return { loading: true, products: [], filters: [] };
        case PRODUCT_LIST_FETCH_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                filteredProducts: action.payload,
                filters: []
            };

        case PRODUCT_LIST_FETCH_FAIL:
            return { loading: false, error: action.payload };

        case FILTER_BY_VALUE:
            let { value } = action.payload;
            let filteredValues = state.products.filter((product) => {
                return product.name.toLowerCase().includes(value.toLowerCase()) || product.vendorName.toLowerCase().includes(value.toLowerCase())
            });

            if (value !== "") {
                return { ...state, filteredProducts: filteredValues };
            } else {
                return { ...state, filteredProducts: state.products };
            }
        case SORT_BY_ALPHABET:
            let sortedAlphabetArr = action.payload.direction === 'asc' ? sortAsc(state.filteredProducts, 'name') : sortDesc(state.filteredProducts, 'name');
            return { ...state, filteredProducts: sortedAlphabetArr };

        case SORT_BY_PRICE:
            let sortedPriceArr = action.payload.direction === 'asc' ? sortAsc(state.filteredProducts, 'price') : sortDesc(state.filteredProducts, 'price');
            return { ...state, filteredProducts: sortedPriceArr };

        case SET_CHECKBOX_FILTER:
            let { checked } = action.payload;
            let genders = state.filters;
            const checkboxExists = genders.indexOf(checked);
            if (checkboxExists === -1) {
                genders.push(checked);
            } else {
                genders.splice(checkboxExists, 1);
            }
            if (genders.length === 0) {
                return { ...state, filteredProducts: state.products };
            }
            return {
                ...state,
                filteredProducts: state.products.filter((product) => genders.includes(product.gender)),
                filters: genders
            };

        case FILTER_BY_CLICK:
            let { clickEvent } = action.payload;
            const filteredData = state.products.filter((product) => product.category === clickEvent);
            return { ...state, filteredProducts: filteredData };

        case FILTER_BY_PRICE_RANGE:
            let { rangeValue } = action.payload;
            let rangeSortedArr = state.products.filter(product => product.price < rangeValue);
            return { ...state, filteredProducts: rangeSortedArr };

        case RESET_FILTERS:
            return { ...state, filteredProducts: state.products }
        default:
            return state;
    }
};


function productDetailsReducer(state = { product: { reviews: [] } }, action) {
    switch (action.type) {
        case PRODUCT_DETAILS_FETCH_REQ:
            return { loading: true, ...state };
        case PRODUCT_DETAILS_FETCH_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FETCH_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


function productImgReducer(state = { currentIndex: 0 }, action) {
    switch (action.type) {
        case GOTO_INDEX:
            return { ...state, currentIndex: action.payload }
        default:
            return state;
    }
};

function productCreateReducer(state = {}, action) {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload };
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

function productUpdateReducer(state = {}, action) {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { loading: true };
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

function productDeleteReducer(state = {}, action) {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true };
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true };
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


// sorting function helpers 
function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field] > a[field]) return -1;

        return 0;
    })
};

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field] > a[field]) return 1;

        return 0;
    })
};



export { productListReducer, productDetailsReducer, productImgReducer, productCreateReducer, productUpdateReducer, productDeleteReducer };
