

import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import allReducers from "./rootReducer";
import { useDispatch } from 'react-redux'
import { type } from "os";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;
const store = configureStore(
    { reducer: allReducers }
)


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;