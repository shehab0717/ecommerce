import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import productReducer from './product/product.reducer';
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers(
    {
        userReducer, 
        productReducer,
        cartReducer
    }
)

export default rootReducer;