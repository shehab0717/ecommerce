import IAction from "../../interfaces/action";
import ICartItem from "../../interfaces/cartItem";
import cartActionTypes from "./cart.actionTypes";

type stateType = {
    addingToCart: boolean,
    items: ICartItem[],
    error: boolean,
    errorMessage?: string,
    fetching: boolean,
}

const initalState: stateType = {
    fetching: false,
    addingToCart: false,
    error: false,
    items: [],

}
const cartReducer = (state = initalState, action: IAction): stateType => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART_START:
            return {
                ...state,
                addingToCart: true,
            };

        case cartActionTypes.ADD_TO_CART_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                addingToCart: false,
                items: action.payload,
            };

        case cartActionTypes.ADD_TO_CART_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.payload
            };


        case cartActionTypes.FETCH_ITEMS_START:
            return{
                ...state,
                fetching: true,
                error: false,
            };

        case cartActionTypes.FETCH_ITEMS_SUCCESS:
            return{
                ...state,
                fetching: false,
                items: action.payload
            };

        case cartActionTypes.FETCH_ITEMS_FAILURE:
            return{
                ...state,
                error: true,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
}

export default cartReducer;