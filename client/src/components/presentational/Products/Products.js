import React, { useEffect } from "react";
import ProductImage from "./components/ProductImage/ProductImage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ScrollArrows from "../ScrollArrows/ScrollArrows";
import './Products.css'

function Products({ dateAndTime, productLineUp, cartContents, updateCart }) {

    let createProductCards = (productLineUp) => {
        let productList = [];
        for (let [id, details] of Object.entries(productLineUp)) {
            productList.push(
                <div key={id} className='products__card'>
                    <ProductImage imageURL={details.imageURL} />
                    <ProductDetails
                        name={details.name}
                        dateAndTime={dateAndTime}
                        productID={id}
                        count={getCount(dateAndTime, id)}
                        maxQuantity={details.quantity}
                        updateCart={updateCart}
                        description={details.description} />
                </div>
            );
        }
        return productList;
    }

    let getCount = (dateAndTime, productID) => {
        if (cartContents.hasOwnProperty(dateAndTime) &&
            cartContents[dateAndTime].hasOwnProperty(productID)) {
            return cartContents[dateAndTime][productID];
        } else return 0;
    }

    return (
        <div id='products'>
            <div id='products__overlay'></div>
            <ScrollArrows />
            <div id='products__cardsWrapper'>
                <div id='products__cards'>
                    <div id='products__bufferTop'></div>
                    {createProductCards(productLineUp)}
                    <div id='products__bufferBottom'></div>
                </div>
            </div>
        </div>

    );
}

export default Products;