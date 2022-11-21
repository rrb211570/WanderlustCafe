import React, { useState } from "react";
import Counter from "../Counter/Counter";
import './Products.css'

function Products({ productLineUp, cartContents, setCartContents }) {

    let createProductCards = (productLineUp) => {
        let productList = [];
        for (let product of Object.values(productLineUp)) {
            productList.push(
                <div key={product.id} className='productCard'>
                    <div className='products__entryImagePanel'>
                        <div className='products__entryImageBorder'>
                            <img className='products__entryImage' src={product.imageURL} />
                        </div>
                    </div>
                    <div className='products__entryDetailsPanel'>
                        <div className='products__entryDetails'>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ margin: '0' }}>{product.name}</p>
                                <Counter dateAndTime={product.dateAndTime} productName={product.name} productID={product.id} unitPrice={product.unitPrice} updateCart={updateCart} count={cartContents.hasOwnProperty(product.dateAndTime) && cartContents[product.dateAndTime].hasOwnProperty(product.name) ? cartContents[product.dateAndTime][product.name].count : 0} />
                            </div>
                            <p style={{ margin: '0' }}>{product.description}</p>
                        </div>
                    </div>
                </div>
            );
        }
        return productList;
    }

    let updateCart = (dateAndTime, productName, productID, unitPrice, count) => {
        let currentCartContents = cartContents;
        if (!currentCartContents.hasOwnProperty(dateAndTime)) currentCartContents[dateAndTime] = {};
        if (count > 0) {
            if (!currentCartContents[dateAndTime].hasOwnProperty(productName)) currentCartContents[dateAndTime][productName] = { productID: productID, unitPrice: unitPrice };
            currentCartContents[dateAndTime][productName].count = count;
        }
        else {
            delete currentCartContents[dateAndTime][productName];
            if (Object.entries(currentCartContents[dateAndTime]).length == 0) delete currentCartContents[dateAndTime];
        }
        setCartContents({ ...currentCartContents });
    }

    return (
        <div id='products'>
            {createProductCards(productLineUp)}
        </div >
    );
}

export default Products;