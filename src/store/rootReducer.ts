import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import productReducer from './product/product.reducer';

const rootReducer = combineReducers(
    {
        userReducer, 
        productReducer
    }
)

export default rootReducer;