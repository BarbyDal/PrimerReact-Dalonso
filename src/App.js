import LogoImg from './img/alonsilogo.JPG';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ITemListContainer from './components/ITemListContainer';


function App() {

  return (
    <div className="App">
      <NavBar/>
      
      <header className="App-header">        
       <img alt="logo marca" src={ LogoImg } />
       <h2>Alonsi e-commerce de ropa</h2>
        <span/>
       <ITemListContainer greeting="Productos"/>
       

      </header>
    </div>
  );
}

export default App;
