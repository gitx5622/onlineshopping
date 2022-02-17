import {
    GET_ALL_CARTS, GET_ALL_CARTS_ERROR, GET_ALL_CARTS_SUCCESS,
    GET_SINGLE_CART, GET_SINGLE_CART_ERROR, GET_SINGLE_CART_SUCCESS,
} from "../dispatchTypes";

export const initialCartState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    carts: [],
    cart: {}
}

export const cartReducer = (
    state = initialCartState,
    action
) => {
    switch (action.type) {
        case GET_ALL_CARTS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_ALL_CARTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                carts: action.carts,
            };
        }
        case GET_ALL_CARTS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_SINGLE_CART: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_SINGLE_CART_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                cart: action.cart,
            };
        }
        case GET_SINGLE_CART_ERROR: {
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