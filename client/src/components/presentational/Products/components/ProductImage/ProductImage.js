import React, { useState } from "react";
import './ProductImage.css';

function ProductImage({ imageURL }) {
    return (
        <div className='productImage'>
            <div className='productImage__border'>
                <img className='productImage__src' src={imageURL} />
            </div>
        </div>

    );
}

export default ProductImage;