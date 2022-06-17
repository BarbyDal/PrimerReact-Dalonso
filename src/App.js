import LogoImg from './img/alonsilogo.JPG';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import ITemListContainer from './components/ITemListContainer'; */
import ItemDetailContainer from './components/ItemDetailContainer'; 


function App() {

  return (
    <div className="App">
      <NavBar/>
      
      <header className="App-header">        
       <img alt="logo marca" src={ LogoImg } />
       <h2>Alonsi e-commerce de ropa</h2>
        <span/>
       {/*<ITemListContainer greeting="Productos"> */}
       <ItemDetailContainer greeting="Detalle"/>
       

      </header>
    </div>
  );
}

export default App;
