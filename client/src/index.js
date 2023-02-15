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
  ['11/12/22, 10AM-2PM', {
      location: 'Ferry Plaza Farmer\'s Market',
      productLineUp: {
          price_1Lv8gsJkoUTiT2SCY1Td3HeS: { name: 'Kesaribath', quantity: 5, unitPrice: 5.0, imageURL: 'kesaribath.jpg', description: 'Semolina cake with intense dairy flavor. Seasoned with honey, cardamom, saffron, raisins and nuts.' },
          price_1Lv8UcJkoUTiT2SCcDwqFytZ: { name: 'Chai Cream Puff', quantity: 5, unitPrice: 4.0, imageURL: 'chai%20cream%20puff.png', description: 'Velvety custard cream infused with house chai, topped with cracquelin. Best consumed within a few hours.' },
          price_1Lv8PXJkoUTiT2SCSEvE9VSV: { name: 'Banana Date Pecan Teacake', quantity: 5, unitPrice: 2.0, imageURL: 'banana%20date%20pecan.jpg', description: 'Banana bread, kicked up a notch with Medjool dates, pecans, and ghee.' },
          price_1Lv8JhJkoUTiT2SClRUn6dpB: { name: 'Korean Pear Jelly', quantity: 5, unitPrice: 2.0, imageURL: 'hakuto%20jelly.jpg', description: 'One half of a Korean pear, gently poached, then suspended in pear jelly with pear mousse.' },
          price_1Lsb8TJkoUTiT2SCXGV6Jgtb: { name: 'Red Bean Bun', quantity: 5, unitPrice: 2.0, imageURL: 'anpan.jpg', description: 'Finger millet brioche, filled with luscious red bean paste - accents of cardamom and orange' }
      }
  }],
  ['11/19/22, 10AM-2PM', {
      location: 'Blah2 Market',
      productLineUp: {
          price_1LvBmkJkoUTiT2SCh18ZhGEP: { name: 'Kesaribath', quantity: 5, unitPrice: 5.0, imageURL: 'kesaribath.jpg', description: 'Semolina cake with intense dairy flavor. Seasoned with honey, cardamom, saffron, raisins and nuts.' },
          price_1LvBnqJkoUTiT2SC82cqjCh3: { name: 'Chai Cream Puff', quantity: 5, unitPrice: 4.0, imageURL: 'chai%20cream%20puff.png', description: 'Velvety custard cream infused with house chai, topped with cracquelin. Best consumed within a few hours.' },
          price_1LvBofJkoUTiT2SCfloJEZs4: { name: 'Banana Date Pecan Teacake', quantity: 5, unitPrice: 2.0, imageURL: 'banana%20date%20pecan.jpg', description: 'Banana bread, kicked up a notch with Medjooldates, pecans, and ghee' },
          price_1LvBq2JkoUTiT2SCyrEXUCQS: { name: 'Korean Pear Jelly', quantity: 5, unitPrice: 2.0, imageURL: 'hakuto%20jelly.jpg', description: 'One half of a Korean pear, gently poached, then suspended in pear jelly with pear mousse.' },
          price_1LvBqkJkoUTiT2SC4vDb4mEY: { name: 'Red Bean Bun', quantity: 5, unitPrice: 2.0, imageURL: 'anpan.jpg', description: 'Finger millet brioche, filled with luscious red bean paste - accents of cardamom and orange' }
      }
  }]
]);

function App() {
  const [cartContents, setCartContents] = useState({});

  let updateCart = (dateAndTime, productID, count) => {
    let currentCartContents = cartContents;
    if (!currentCartContents.hasOwnProperty(dateAndTime)) currentCartContents[dateAndTime] = {};
    if (count > 0) currentCartContents[dateAndTime][productID] = count;
    else {
      delete currentCartContents[dateAndTime][productID];
      if (Object.entries(currentCartContents[dateAndTime]).length == 0) delete currentCartContents[dateAndTime];
    }
    setCartContents({ ...currentCartContents });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<HomePanel popUps={popUps} cartContents={cartContents} updateCart={updateCart}/>} />
        <Route path='/orderPreview' element={<OrderPreviewPanel popUps={popUps} cartContents={cartContents} updateCart={updateCart} />} />
        <Route path='/*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}