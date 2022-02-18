import {
    ERROR,
    SUCCESS,
    LOADING
} from "../dispatchTypes";

export const initialUserState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
}

export const userReducer = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
            };
        }
        case ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
                errorMessage: action.errorMessage
            };
        }
        default:
            return state
    }

};