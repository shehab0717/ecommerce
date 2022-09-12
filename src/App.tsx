import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import SignUp from './components/SignUp/SignUp';
import {products as productsData} from './dummyData';
function App() {
  return (
    <>
      {/* <Navbar />
      <Products data={productsData}/> */}
      <SignUp />
    </>
  );
}

export default App;
