import IconButton from "../IconButton/IconButton";
import deleteIcon from '../../assets/icons/icon-delete.svg';

const Cart = () => {
    return (
        <div className="absolute fixed top-20 right-20 w-80 shadow-lg shadow-gray-400 rounded-lg py-2 bg-white">
            <span className="block px-4 my-1 font-semibold">Cart</span>
            <hr />
            <div className="my-2">
                <div className="flex flex-row px-2">
                    <img src="https://picsum.photos/200/200" className="w-10 rounded" />
                    <div className="flex flex-col grow mx-2">
                        <span className="text-gray-500">some text here some text</span>
                        <span className="text-sm">$110.00 x 3 <span className="font-bold">$330.00</span></span>
                    </div>
                    <IconButton className="bg-transparent border-none" iconSrc={deleteIcon} onClick={() => { }} />
                </div>
            </div>
            <div className="mx-2 mt-5">
                <button className="bg-orange text-white border-none w-full font-semibold">Checkout</button>
            </div>
        </div>
    )
}

export default Cart;