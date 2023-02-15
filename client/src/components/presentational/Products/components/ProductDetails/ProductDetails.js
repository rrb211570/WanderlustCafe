import React, { useState } from "react";
import Counter from "../../../Counter/Counter";
import './ProductDetails.css';

function ProductDetails({ name, dateAndTime, productID, count, maxQuantity, updateCart, description }) {
    return (
        <div className='productDetails'>
            <div className='productDetails__panel'>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>{name}</p>
                    <Counter identifiers={[dateAndTime, productID]} count={count} minQuantity={0} maxQuantity={maxQuantity} updateFunction={updateCart} />
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProductDetails;