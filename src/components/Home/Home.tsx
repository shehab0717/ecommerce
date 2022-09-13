import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products";
import { products as productsData } from "../../dummyData";

const Home = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <Products data={productsData} />
            </div>
        </>
    )
}

export default Home;