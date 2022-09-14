import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import IProduct from "../../interfaces/product";


const ProductCard: FunctionComponent<IProduct> = (product) => {
    return (
        <Link key={product.id} to="/product-details/1" className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={product.image}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 font-semibold">{product.title}</h3>
            <p className='italic text-gray-600 text-sm'> {product.description}</p>
            <p className="mt-1 font-medium text-gray-900">${product.price}</p>
        </Link>
    )

}

export default ProductCard;