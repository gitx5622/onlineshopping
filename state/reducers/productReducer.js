import {
    GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_ERROR,
    GET_ALL_CATEGORIES_SUCCESS,
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_SUCCESS
} from "../dispatchTypes";

export const initialOrdersState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    products: [],
    categories: [],
    product: {}
}

export const productReducers = (
    state = initialOrdersState,
    action
) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                products: action.products,
            };
        }
        case GET_PRODUCTS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_SINGLE_PRODUCT: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_SINGLE_PRODUCT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                product: action.product,
            };
        }
        case GET_SINGLE_PRODUCT_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_ALL_CATEGORIES: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_ALL_CATEGORIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                categories: action.categories,
            };
        }
        case GET_ALL_CATEGORIES_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        default:
            return state
    }

};