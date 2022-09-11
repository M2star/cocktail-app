import './App.css';
import { Routes , Route} from 'react-router-dom' ;
import Home from './page/Home/index';

import PageNotFound from './component/common/pageNotfound/PageNotFound';
import ProductDetails from './component/common/productDetail/ProductDetail';
// import FilterItem from './component/common/filter/filterItem/FilterItem';
function App() {
  return (
  
   
    <div className="content">
  
    <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='/product/:id' element={<ProductDetails />}/>
      <Route path='*' element={<PageNotFound />}/>
      
    </Routes>
   
    </div>
  );
}

export default App;
 