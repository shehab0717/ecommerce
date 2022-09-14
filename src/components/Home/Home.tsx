import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products";
import { products as productsData } from "../../dummyData";
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';

const Home = (): JSX.Element => {

    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/signup');
    },[])
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