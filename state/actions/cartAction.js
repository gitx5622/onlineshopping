import axiosConfig from '../../config/axios';
import {
    GET_ALL_CARTS,
    GET_ALL_CARTS_SUCCESS,
    GET_ALL_CARTS_ERROR,
    GET_SINGLE_CART,
    GET_SINGLE_CART_SUCCESS, GET_SINGLE_CART_ERROR
} from '../dispatchTypes';


export const getUserCarts = async (dispatch) => {
    dispatch({
        type: GET_ALL_CARTS,
    });
    try {
        return await axiosConfig
            .get(`/carts/user/4`)
            .then(response => {
                dispatch({
                    type: GET_ALL_CARTS_SUCCESS,
                    carts: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_ALL_CARTS_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};

export const getSingleCart= async (dispatch, cart_id) => {
    dispatch({
        type: GET_SINGLE_CART,
    });
    try {
        return await axiosConfig
            .get(`/carts/user/${cart_id}`)
            .then(response => {
                dispatch({
                    type: GET_SINGLE_CART_SUCCESS,
                    product: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_SINGLE_CART_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};

