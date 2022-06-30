
import LogoImg from './img/alonsilogo.JPG';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer'; 
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart'

import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div className="App">
    <CartProvider>
      <BrowserRouter> 
          <NavBar/>
          <Routes>
          
            <Route path="/" element={
              <ItemListContainer greeting="Catalogo Productos" />
            }
            />
            <Route path="/category/:id" element={
              <ItemListContainer greeting="Categoria de items" />
            }
            />
            <Route path="/item/:id" element={
              <ItemDetailContainer greeting="Detalle producto"/> 
            }/>
            <Route path="/cart"element={< Cart/>} 
            />
          </Routes> 
        </BrowserRouter> 
    </CartProvider>    
      <header className="App-header">           
            <img alt="logo marca" src={ LogoImg } />
            <h2>Alonsi e-commerce de ropa</h2>
            <span/>  
    
      </header>


    </div>
  );
}

export default App;
