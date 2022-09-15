import ICartItem from "../../interfaces/cartItem";
import IProduct from "../../interfaces/product";
import { createAction, delay } from "../../utils/utils";
import cartActionTypes from "./cart.actionTypes";



const addTocart = (item: ICartItem) => async (dispatch: Function) => {
    dispatch(createAction(cartActionTypes.ADD_TO_CART_START));
    console.log(item);
    try {
        await delay(3000);
        const data = localStorage.getItem('cart');
        const items: ICartItem[] = data ? JSON.parse(data) : [];
        const id = item.product ? item.product.id : 1;
        const found: ICartItem[] = items.filter(i => i.product ? i.product.id : '0' === id);
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
        console.log(error);
        dispatch(createAction(cartActionTypes.ADD_TO_CART_FAILURE));
    }
}

export { addTocart }