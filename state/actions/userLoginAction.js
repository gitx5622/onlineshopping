import axiosConfig from '../../config/axios';
import {ERROR, LOADING, SUCCESS} from "../dispatchTypes";

export const loginUser = async (dispatch, bodyData) => {
    dispatch({
        type: LOADING,
    });
    try {
        return await axiosConfig.post('/auth/login', bodyData).then(response => {
            let userToken = response.data;
            console.log(userToken);
            if (userToken) localStorage.token = JSON.stringify(userToken);
            dispatch({
                type: SUCCESS,
            });
            return response;
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            errorMessage:
                error.response.data.message,
        });

        return error.response;
    }
};
