import ProductCard from "../ProductCard/ProductCard";
import Product from "../../models/product";

interface ProductsProps {
    data: Array<Product>
}
const Products = function (props: ProductsProps): JSX.Element {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {props.data.map((product) => <ProductCard {...product} key={product.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Products;