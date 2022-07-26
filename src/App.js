
import LogoImg from './img/alonsilogo.JPG';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'; 
import ItemDetailContainer from './components/ItemDetailContainer'; 
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CartPage from './components/CartPage'
import { CartProvider } from './context/CartContext';
import Error404 from './components/Error404';
import CartForm from './components/CartForm';

function App() {

  
  return (
   
    <CartProvider>
      <BrowserRouter> 
      <div className="App">
          <NavBar/>
          <Routes>
          
            <Route path="/" element={
              <ItemListContainer greeting="Catalogo Productos" />
            }
            />
            <Route path="/category/:categoryId" element={
              <ItemListContainer greeting="Categoria de items" />
            }
            />
            <Route path="/item/:itemId" element={
              <ItemDetailContainer greeting="Detalle producto"/> 
            }/>
            <Route path="/cart"element={< CartPage/>} 
            />
            <Route path="/cartForm" element={<CartForm/>}/>
            
            <Route path="*" element={< Error404/>} />
          </Routes> 
          <footer className="App-header">           
            <img alt="logo marca" src={ LogoImg } />
            <h2>Alonsi e-commerce de ropa</h2>
             
          </footer>
          </div>
        </BrowserRouter> 
    </CartProvider>    
  );
}

export default App;
