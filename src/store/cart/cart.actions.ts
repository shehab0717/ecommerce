import ICartItem from "../../interfaces/cartItem";
import IProduct from "../../interfaces/product";
import { createAction, delay } from "../../utils/utils";
import cartActionTypes from "./cart.actionTypes";



const addTocart = (item: ICartItem) => async (dispatch: Function) => {
    if (item.product) {
        dispatch(createAction(cartActionTypes.ADD_TO_CART_START));
        console.log(item);
        try {
            await delay(3000);
            const data = localStorage.getItem('cart');
            const items: ICartItem[] = data ? JSON.parse(data) : [];
            const id = item.product.id;
            const found: ICartItem[] = items.filter(i => i.product && i.product.id === id);
            if (found.length > 0) {
                found[0].count += item.count;
            }
            else {
                items.push(item);
            }
            localStorage.setItem('cart', JSON.stringify(items));
            dispatch(createAction(cartActionTypes.ADD_TO_CART_SUCCESS, items));
        }
        catch (error) {
            dispatch(createAction(cartActionTypes.ADD_TO_CART_FAILURE, error));
        }
    }
    else {
        dispatch(createAction(cartActionTypes.ADD_TO_CART_FAILURE, "can't add product to the cart!"))
    }
}

const getCartItems = () => async (dispatch: Function) => {
    dispatch(createAction(cartActionTypes.FETCH_ITEMS_START));
    try {
        await delay(3000);
        const data = localStorage.getItem('cart');
        const items = data ? JSON.parse(data) : [];
        dispatch(createAction(cartActionTypes.FETCH_ITEMS_SUCCESS, items));
    }
    catch (error) {
        dispatch(cartActionTypes.FETCH_ITEMS_FAILURE, error)
    }

}


const removeCartItem = (id: string) => async (dispatch: Function) => {
    if (id) {
        dispatch(createAction(cartActionTypes.REMOVE_ITEM_START));
        try {
            await delay(3000);
            const data = localStorage.getItem('cart');
            const items: ICartItem[] = data ? JSON.parse(data) : [];
            const filteredItems = items.filter(i => i.product.id != id)
            localStorage.setItem('cart', JSON.stringify(filteredItems));
            dispatch(createAction(cartActionTypes.REMOVE_ITEM_SUCCESS, filteredItems));

        }
        catch (error) {
            dispatch(createAction(cartActionTypes.REMOVE_ITEM_FAILURE, error));
        }
    }
}

export { addTocart, getCartItems, removeCartItem }