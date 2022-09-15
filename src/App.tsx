import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products";
import { Link, Outlet, Routes, useNavigate, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const currentUser = useSelector(({ userReducer }: RootState) => userReducer.currentUser());
  const navigate = useNavigate();

  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);


  useEffect(() => {
    if (!currentUser)
      navigate('/signup');
  }, [currentUser])

  return (
    <>
      <Navbar onCartClick={() => { setCartOpen(!cartOpen) }} />
      <div className="container mx-auto my-10">
        <Cart clasName={`${cartOpen? '': 'invisible'}`} />
        <Outlet />
      </div>
    </>
  )
}

export default App;
