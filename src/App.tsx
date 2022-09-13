import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import SignUp from './components/SignUp/SignUp';
import { products as productsData } from './dummyData';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
