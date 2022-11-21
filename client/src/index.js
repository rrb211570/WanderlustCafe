import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from './pages/Intro/Intro';
import HomePanel from './pages/Home/Home.js'
import OrderPreviewPanel from './pages/OrderPreview/OrderPreview';
import NoPage from './pages/NoPage.js'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let popUps = new Map([
  ['10/29/22, 10AM-2PM', {
    location: 'Blah Market',
    productLineUp: {
      0: { name: 'Kesaribath', id: 'price_1Lv8gsJkoUTiT2SCY1Td3HeS', dateAndTime: '11/12/22, 10AM-2PM', location: 'Blah Market', quantity: 5, unitPrice: 5.0, imageURL: 'kesaribath.jpg', description: 'Semolina cake with intense dairy flavor. Seasoned with honey, cardamom, saffron, raisins and nuts.' },
      1: { name: 'Chai Cream Puff', id: 'price_1Lv8UcJkoUTiT2SCcDwqFytZ', dateAndTime: '11/12/22, 10AM-2PM', location: 'Blah Market', quantity: 5, unitPrice: 4.0, imageURL: 'chai%20cream%20puff.png', description: 'Velvety custard cream infused with house chai blend, topped with sugar cookie. Best consumed within a few hours.' },
      2: { name: 'Banana Date Pecan Teacake', id: 'price_1Lv8PXJkoUTiT2SCSEvE9VSV', dateAndTime: '11/12/22, 10AM-2PM', location: 'Blah Market', quantity: 5, unitPrice: 2.0, imageURL: 'banana%20date%20pecan.jpg', description: 'Banana bread, kicked up a notch with dates, pecans, and ghee' },
      3: { name: 'Korean Pear Jelly', id: 'price_1Lv8JhJkoUTiT2SClRUn6dpB', dateAndTime: '11/12/22, 10AM-2PM', location: 'Blah Market', quantity: 5, unitPrice: 2.0, imageURL: 'hakuto%20jelly.jpg', description: 'Gently poached Korean pear, suspended in pear jelly with a filling of pear mousse.' },
      4: { name: 'Red Bean Bun', id: 'price_1Lsb8TJkoUTiT2SCXGV6Jgtb', dateAndTime: '11/12/22, 10AM-2PM', location: 'Blah Market', quantity: 5, unitPrice: 2.0, imageURL: 'anpan.jpg', description: 'Finger millet brioche, filled with luscious red bean paste - accents of cardamom and orange' }
    }
  }],
  ['11/5/22, 10AM-2PM', {
    location: 'Blah2 Market',
    productLineUp: {
      5: { name: 'Kesaribath', id: 'price_1LvBmkJkoUTiT2SCh18ZhGEP', dateAndTime: '11/19/22, 10AM-2PM', location: 'Blah2 Market', quantity: 5, unitPrice: 5.0, imageURL: 'kesaribath.jpg', description: 'Semolina cake with intense dairy flavor. Seasoned with honey, cardamom, saffron, raisins and nuts.' },
      6: { name: 'Chai Cream Puff', id: 'price_1LvBnqJkoUTiT2SC82cqjCh3', dateAndTime: '11/19/22, 10AM-2PM', location: 'Blah2 Market', quantity: 5, unitPrice: 4.0, imageURL: 'chai%20cream%20puff.png', description: 'Velvety custard cream infused with house chai blend, topped with sugar cookie. Best consumed within a few hours.' },
      7: { name: 'Banana Date Pecan Teacake', id: 'price_1LvBofJkoUTiT2SCfloJEZs4', dateAndTime: '11/19/22, 10AM-2PM', location: 'Blah2 Market', quantity: 5, unitPrice: 2.0, imageURL: 'banana%20date%20pecan.jpg', description: 'Banana bread, kicked up a notch with dates, pecans, and ghee' },
      8: { name: 'Korean Pear Jelly', id: 'price_1LvBq2JkoUTiT2SCyrEXUCQS', dateAndTime: '11/19/22, 10AM-2PM', location: 'Blah2 Market', quantity: 5, unitPrice: 2.0, imageURL: 'hakuto%20jelly.jpg', description: 'Gently poached Korean pear, suspended in pear jelly with a filling of pear mousse.' },
      9: { name: 'Red Bean Bun', id: 'price_1LvBqkJkoUTiT2SC4vDb4mEY', dateAndTime: '11/19/22, 10AM-2PM', location: 'Blah2 Market', quantity: 5, unitPrice: 2.0, imageURL: 'anpan.jpg', description: 'Finger millet brioche, filled with luscious red bean paste - accents of cardamom and orange' }
    }
  }]
]);

function App() {
  const [cartContents, setCartContents] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<HomePanel popUps={popUps} cartContents={cartContents} setCartContents={setCartContents} />} />
        <Route path='/orderPreview' element={<OrderPreviewPanel cartContents={cartContents} setCartContents={setCartContents} />} />
        <Route path='/*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}