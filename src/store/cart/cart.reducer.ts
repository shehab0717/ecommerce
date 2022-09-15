import IAction from "../../interfaces/action";
import ICartItem from "../../interfaces/cartItem";
import cartActionTypes from "./cart.actionTypes";

type stateType = {
    items: ICartItem[],
    addingItem: boolean,
    fetchingItems: boolean,
    removingItem?: boolean,
    error: boolean,
    fetchingError?: boolean,
    addingError?: string,
    removingError?: string,
}

const initalState: stateType = {
    fetchingItems: false,
    addingItem: false,
    error: false,
    items: [],

}
const cartReducer = (state = initalState, action: IAction): stateType => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART_START:
            return {
                ...state,
                addingItem: true,
            };

        case cartActionTypes.ADD_TO_CART_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                addingItem: false,
                items: action.payload,
            };

        case cartActionTypes.ADD_TO_CART_FAILURE:
            return {
                ...state,
                error: true,
                addingError: action.payload
            };


        case cartActionTypes.FETCH_ITEMS_START:
            return{
                ...state,
                fetchingItems: true,
                error: false,
            };

        case cartActionTypes.FETCH_ITEMS_SUCCESS:
            return{
                ...state,
                fetchingItems: false,
                items: action.payload
            };

        case cartActionTypes.FETCH_ITEMS_FAILURE:
            return{
                ...state,
                error: true,
                addingError: action.payload,
            };

        case cartActionTypes.REMOVE_ITEM_START:
            return{
                ...state,
                removingItem: true,
            };

        case cartActionTypes.REMOVE_ITEM_SUCCESS:
            return{
                ...state,
                removingItem: false,
                items: action.payload,
            };

        case cartActionTypes.REMOVE_ITEM_FAILURE:
            return{
                ...state,
                error: true,
                removingError: action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;