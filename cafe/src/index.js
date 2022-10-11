import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePanel from './pages/Home/Home.js'
import AboutPanel from './pages/About.js'
import ShopPanel from './pages/Shop.js'
import CartPanel from './pages/Cart.js'
import NoPage from './pages/NoPage.js'
import reportWebVitals from './reportWebVitals';
import Intro from './pages/Intro/Intro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<HomePanel />} />
        <Route path='/about' element={<AboutPanel />} />
        <Route path='/shop' element={<ShopPanel />} />
        <Route path='/cart' element={<CartPanel />} />
        {/*<Route path='/editor/:sheetID' element={<Sheet />} />*/}
        <Route path='/*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
