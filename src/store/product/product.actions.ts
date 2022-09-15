import IAction from "../../interfaces/action";
import IProduct from "../../interfaces/product";
import productActionTypes from "./product.actionTypes";
import * as services from "./product.services";
import {createAction} from '../../utils/utils';


function fetchAllProductsStart(): IAction {
    return {
        type: productActionTypes.FETCH_ALL_STARTS
    }
}

function fetchAllProductsSuccess(products: IProduct[]): IAction {
    return {
        type: productActionTypes.FETCH_ALL_SUCCESS,
        payload: products
    }
}

function fetchAllProductsFailure(error: string): IAction {
    return {
        type: productActionTypes.FETCH_ALL_FAILURE,
        payload: error
    }
}

const fetchAllProducts = () => async (dispatch: Function) => {
    dispatch(fetchAllProductsStart());

    try {
        const response = await services.fetchAllProducts();
        dispatch(fetchAllProductsSuccess(response));
    }
    catch (error) {
        dispatch(fetchAllProductsFailure('Something went wrong!! please try again later'));
    }
}


const fetchOneProduct = (productId: number) => async (dispatch: Function) => {
    dispatch(createAction(productActionTypes.FETCH_ALL_STARTS));
    try{
        const product = await services.fetOneProduct(productId);
        dispatch(createAction(productActionTypes.FETCH_ONE_SUCCESS,product));
    }
    catch(_){
        const error = 'something went wrong, try again later!'
        dispatch(createAction(productActionTypes.FETCH_ONE_FAILURE, error));
    }
}

export { fetchAllProducts, fetchOneProduct };