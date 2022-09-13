import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import SignUp from './components/SignUp/SignUp';
import {products as productsData} from './dummyData';
function App() {
  return (
    <>
      {/* <Navbar />
      <Products data={productsData}/> */}
      <ProductDetails />
    </>
  );
}

export default App;
