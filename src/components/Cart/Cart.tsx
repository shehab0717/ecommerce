import IconButton from "../IconButton/IconButton";
import deleteIcon from '../../assets/icons/icon-delete.svg';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import ReactLoading from 'react-loading';
import { useEffect } from 'react';
import { getCartItems, removeCartItem } from "../../store/cart/cart.actions";

const Cart = ({ clasName }: any) => {

    const items = useSelector(({ cartReducer }: RootState) => cartReducer.items ?? []);
    const isFetching = useSelector(({ cartReducer }: RootState) => cartReducer.fetchingItems ?? []);
    const isRemoving = useSelector(({ cartReducer }: RootState) => cartReducer.removingItem);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCartItems());
    }, [])


    function removeItem(id: string) {
        dispatch(removeCartItem(id));
    }


    return (
        <div className={"absolute fixed top-20 right-20 w-80 shadow-lg shadow-gray-400 rounded-lg py-2 bg-white " + clasName}>
            <div>
                <span className="block px-4 my-1 font-semibold">Cart</span>
                <hr />
                {
                    isFetching
                        ? <ReactLoading className="mx-auto my-6" width={30} height={30}  color="#000" type="spin" />
                        : items.length > 0 ?
                            isRemoving
                                ? <ReactLoading className="mx-auto my-6" width={30} height={30} color="#000" type="spin" />
                                : <div>
                                    <div className="my-2 flex flex-col">
                                        {
                                            items.map(
                                                item => (
                                                    <div className="flex flex-row px-2 mb-3">
                                                        <img src={item.product?.image} className="w-10 rounded" />
                                                        <div className="flex flex-col grow mx-2 items-start">
                                                            <span className="text-gray-500">{item.product?.title}</span>
                                                            <span className="text-sm">${item.product?.price} x {item.count} <span className="font-bold">${(item.product ? item.product.price : 0) * item.count}</span></span>
                                                        </div>
                                                        <IconButton
                                                            className="bg-transparent border-none"
                                                            iconSrc={deleteIcon}
                                                            onClick={() => { removeItem(item.product.id) }}
                                                        />
                                                    </div>
                                                )
                                            )
                                        }
                                    </div>
                                    <div className="mx-2 mt-5">
                                        <button className="bg-orange text-white border-none w-full font-semibold">Checkout</button>
                                    </div>
                                </div>
                            : <div className="py-10 text-gray-400 font-medium text-center" > Your cart is empty</div>
                }
            </div>
        </div>
    )
}

export default Cart;