import './App.css';
import Products from './components/Products/Products';
import {products as productsData} from './dummyData';
function App() {
  return (
    <Products data={productsData}/>
  );
}

export default App;
