import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products/Products";
import { Link, Outlet, Routes, useNavigate, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import ProductDetails from './components/ProductDetails/ProductDetails';
function App() {
  const currentUser = useSelector(({ userReducer }: RootState) => userReducer.currentUser());
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser)
      navigate('/signup');
  }, [currentUser])
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  )
}

export default App;
