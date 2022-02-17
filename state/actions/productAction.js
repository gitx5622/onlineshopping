import axiosConfig from '../../config/axios';
import {
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS,
    GET_ALL_CATEGORIES_SUCCESS,
    GET_ALL_CATEGORIES,
    GET_ALL_CATEGORIES_ERROR,
    GET_SINGLE_PRODUCT,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR
} from '../dispatchTypes';


export const getProducts = async (dispatch, sort) => {
    dispatch({
        type: GET_PRODUCTS,
    });
    try {
        return await axiosConfig
            .get(`/products?sort=${sort}`)
            .then(response => {
                dispatch({
                    type: GET_PRODUCTS_SUCCESS,
                    products: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};

export const getSingleProduct= async (dispatch, product_id) => {
    dispatch({
        type: GET_SINGLE_PRODUCT,
    });
    try {
        return await axiosConfig
            .get(`/products/${product_id}`)
            .then(response => {
                dispatch({
                    type: GET_SINGLE_PRODUCT_SUCCESS,
                    product: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_SINGLE_PRODUCT_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};

export const getAllCategories = async (dispatch) => {
    dispatch({
        type: GET_ALL_CATEGORIES,
    });
    try {
        return await axiosConfig
            .get('/products/categories')
            .then(response => {
                dispatch({
                    type: GET_ALL_CATEGORIES_SUCCESS,
                    categories: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_ALL_CATEGORIES_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};
