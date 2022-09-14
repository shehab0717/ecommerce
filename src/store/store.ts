

import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import allReducers from "./rootReducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;
const store = configureStore(
    { reducer: allReducers }
)

export default store;