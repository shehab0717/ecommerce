import { FunctionComponent } from 'react';
import Product from "../../models/product";


const ProductCard: FunctionComponent<Product> = (product) => {
    return (
        <a key={product.id} href='' className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={product.image}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}$</p>
        </a>
    )

}

export default ProductCard;