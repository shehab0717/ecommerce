import CountHandler from "../CountHandler/CountHandler";
import Gallery from "../Gallery/Gallery";
import IconButton from "../IconButton/IconButton";
import Price from "../Price/Price";
import cartIcon from '../../assets/icons/icon-cart.svg';

const ProductDetails = (): JSX.Element => {
    return (
        <div className="flex md:flex-row sm:flex-col">
            <div className="md:w-1/3 sm:w-full">
                <Gallery />
            </div>
            <div className="w-2/3 max-w-2xl mx-auto py-12 px-6">
                <h6 className="text-md text-orange uppercase font-medium">sneaker company</h6>
                <h1 className="text-4xl font-semibold mt-3 mb-10">Sneakers White x Brown</h1>
                <p className="text-md text-gray-400 font-medium">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quam excepturi vel, delectus pariatur culpa laborum labore maiores deleniti ad sunt.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quam excepturi vel, delectus pariatur culpa laborum labore maiores deleniti ad sunt.
                </p>
                <Price className="my-8" price={210} discount={50} />
                <div className="flex flex-row justify-between mt-8">
                    <CountHandler />
                    <IconButton onClick={() => { }} iconSrc={cartIcon} text='Add to cart'
                        className="py-3 bg-orange text-white font-medium border-none grow mx-4 shadow rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;