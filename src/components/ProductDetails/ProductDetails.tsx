import CountHandler from "../CountHandler/CountHandler";
import Gallery from "../Gallery/Gallery";
import IconButton from "../IconButton/IconButton";
import Price from "../Price/Price";
import cartIcon from '../../assets/icons/icon-cart.svg';
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import ReactLoading from 'react-loading';
import { useEffect } from 'react';
import { fetchOneProduct } from "../../store/product/product.actions";
import * as actions from '../../store/cart/cart.actions';
import ICartItem from "../../interfaces/cartItem";



const ProductDetails = (): JSX.Element => {
    const { id } = useParams();
    const isFetching = useSelector(({ productReducer }: RootState) => productReducer.fetchingOne);
    const product = useSelector(({ productReducer }: RootState) => productReducer.productDetails);
    const dispatch = useAppDispatch();
    let itemCount = 0;

    console.log('product id: ' + id);

    useEffect(() => {
        if (id)
            dispatch(fetchOneProduct(parseInt(id)))
    }, [id])

    function onCountChange(count: number) {
        itemCount = count;
    }

    function addToCart() {
        dispatch(actions.addTocart({ count: itemCount > 0 ? itemCount : 1, product: product }))
    }
    return (
        isFetching
            ? <ReactLoading color="#000" />
            : !product
                ? <div></div>
                : <div className="flex md:flex-row sm:flex-col">
                    <div className="md:w-1/3 sm:w-full">
                        <Gallery images={[product.image]} />
                    </div>
                    <div className="w-2/3 max-w-2xl mx-auto py-12 px-6">
                        <h6 className="text-md text-orange uppercase font-medium">sneaker company</h6>
                        <h1 className="text-4xl font-semibold mt-3 mb-10">{product.title}</h1>
                        <p className="text-md text-gray-400 font-medium">
                            {product.description}
                        </p>
                        <Price className="my-8" price={product.price} discount={10} />
                        <div className="flex flex-row justify-between mt-8">
                            <CountHandler onChange={onCountChange} />
                            <IconButton onClick={addToCart} iconSrc={cartIcon} text='Add to cart'
                                className="hover:opacity-80 py-3 bg-orange text-white font-medium border-none grow mx-4 shadow rounded-xl"
                            />
                        </div>
                    </div>
                </div>
    )
}

export default ProductDetails;