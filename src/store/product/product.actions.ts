import IAction from "../../interfaces/action";
import IProduct from "../../interfaces/product";
import productActionTypes from "./product.actionTypes";
import * as services from "./product.services";


function fetchAllProductsStart(): IAction{
    return{
        type: productActionTypes.FETCH_ALL_STARTS
    }
}

function fetchAllProductsSuccess(products: IProduct[]): IAction{
    return {
        type: productActionTypes.FETCH_ALL_SUCCESS,
        payload: products
    }
}

function fetchAllProductsFailure(error: string): IAction{
    return{
        type: productActionTypes.FETCH_ALL_FAILURE,
        payload: error
    }
}

const fetchAllProducts = () => async (dispatch: Function) => {
    dispatch(fetchAllProductsStart());

    try{
        const response = await services.fetchAllProducts();
        dispatch(fetchAllProductsSuccess(response.data));
    }
    catch(error){
        dispatch(fetchAllProductsFailure('Something went wrong!! please try again later'));
    }
}

export {fetchAllProducts};