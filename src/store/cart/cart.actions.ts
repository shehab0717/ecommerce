import cartItem from "../../interfaces/cartItem";
import IProduct from "../../interfaces/product";
import { createAction, delay } from "../../utils/utils";
import cartActionTypes from "./cart.actionTypes";



const addTocart = (item: cartItem) => async (dispatch: Function) => {
    dispatch(createAction(cartActionTypes.ADD_TO_CART_START));

    try {
        await delay(3000);
        const data = localStorage.getItem('cart');
        const items: cartItem[] = data ? JSON.parse(data) : [];
        const id = item.product.id;
        const found: cartItem[] = items.filter(i => i.product.id === id);
        if (found) {
            found[0].count += item.count;
        }
        else {
            items.push(item);
        }
        console.log(items);
        localStorage.setItem('cart', JSON.stringify(items));
        dispatch(createAction(cartActionTypes.ADD_TO_CART_SUCCESS), items);
    }
    catch (error) {
        dispatch(createAction(cartActionTypes.ADD_TO_CART_FAILURE));
    }
}