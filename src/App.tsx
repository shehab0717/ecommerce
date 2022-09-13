import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import SignUp from './components/SignUp/SignUp';
import { products as productsData } from './dummyData';
function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {/* <Products data={productsData}/> */}
        <div className='mt-8'>
          <ProductDetails />
        </div>
      </div>
    </>
  );
}

export default App;
