import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import {products as productsData} from './dummyData';
function App() {
  return (
    <>
      <Navbar />
      <Products data={productsData}/>
    </>
  );
}

export default App;
