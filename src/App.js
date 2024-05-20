import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Product from './pages/Product.js';
import Stingray from './pages/Stingray.js';
import Track from './pages/Tracking.js'
import NavBar from './components/NavBar';
import ProductHistory from './pages/ProductHistory.js';

function App() {
  let [isAdmin, setisAdmin] = useState(false);
  let [isLoggedIn, setisLoggedin] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={ <SignUp />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/stingray' element={<Stingray />}/>
          <Route path='/tracking' element={<Track />}/>
          <Route path='/product-history' element={<ProductHistory />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
