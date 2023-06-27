import './App.css';
import Header from "./containers/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetail";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={< ProductListing/>}>
          </Route>    
          <Route path='/product/:productid' element={<ProductDetails />}>
            
          </Route>
         
          <Route>404 Not Found</Route>
         </Routes>
        </BrowserRouter>
           

    </div>
  );
}

export default App;
