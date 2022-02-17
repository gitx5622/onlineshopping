import { combineReducers } from 'redux';
import {productReducers} from "./productReducer";
import {userReducer} from "./userReducer";
import {cartReducer} from "./cartReducer";


const rootReducer = combineReducers({
    productState: productReducers,
    userState: userReducer,
    cartState: cartReducer
});

export default rootReducer;
