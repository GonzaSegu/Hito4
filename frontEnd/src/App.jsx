import Navbar from './components/Navbar';
//import Home from './components/Pizzas_Resumen'; 
import Footer from './components/Footer';
//import Cart from './components/Cart';
//import Register from './components/Register';
//import Login from './components/Login';
import Home from './components/Home';
import Pizza from './components/Pizza';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Home/>
      {/*<Register/>
      <Login/> 
      <Cart/>
      <Pizza/>*/}
      <Footer/>
    </div>
  );
}

export default App;

