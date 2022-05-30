import { Link } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar';
import Servises from './components/Servises';
import Order from './components/order';
import Products from './components/Products';
import Cards from './components/Cards'
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
          <div className="container-carrossel">
            <div className="carrossel"></div>
          </div>
          <Servises />
            <Order />
          <Products />
          <div className="container-card">
            < Cards />
          </div>
      <Footer />
    </>
  );
}

export default App;
