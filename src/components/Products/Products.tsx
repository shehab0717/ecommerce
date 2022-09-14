import ProductCard from "../ProductCard/ProductCard";
import IProduct from "../../interfaces/product";
import * as actions from "../../store/product/product.actions";
import ReactLoading from 'react-loading';
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from '../../store/store';
import { useEffect } from 'react';

interface ProductsProps {
    data: Array<IProduct>
}
const Products = function (props: ProductsProps): JSX.Element {

    const isFetching = useSelector(({ productReducer }: RootState) => productReducer.fetchingAll)
    const products = useSelector(({ productReducer }: RootState) => productReducer.products)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(actions.fetchAllProducts());
    }, []);

    return (
        isFetching
            ? <ReactLoading color="#000" type="spin" className="mx-auto mt-12" />
            : <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => <ProductCard {...product} key={product.id} />)}
                    </div>
                </div>
            </div>
    )
}

export default Products;