import IAction from "../../interfaces/action";
import IProduct from "../../interfaces/product";
import productActionTypes from "./product.actionTypes";

type stateType = {
    fetchingAll: boolean,
    fetchingOne: boolean,
    products: IProduct[],
    productDetails?: IProduct,
    error: boolean,
    errorMessage?: string
}

const initialState: stateType = {
    fetchingAll: true,
    fetchingOne: true,
    products: [],
    error: false,
}
function productReducer (state = initialState, action: IAction): stateType {
    switch (action.type) {
        case productActionTypes.FETCH_ALL_STARTS:
            return {
                ...state,
                fetchingAll: true,
            };

        case productActionTypes.FETCH_ALL_SUCCESS:
            return{
                ...state,
                fetchingAll: false,
                products: action.payload,
            };

        case productActionTypes.FETCH_ALL_FAILURE:
            return{
                ...state,
                fetchingAll: false,
                error: true,
                errorMessage: action.payload,
            }


        default:
            return state;
    }
}


export default productReducer;