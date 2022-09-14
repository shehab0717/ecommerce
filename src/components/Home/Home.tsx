import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products";
import { products as productsData } from "../../dummyData";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Home = (): JSX.Element => {

    const currentUser = useSelector(({ userReducer }: RootState) => userReducer.currentUser());
    const navigate = useNavigate();
    useEffect(() => {
        if(!currentUser)
            navigate('/signup');
    }, [currentUser])
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