import React, { useState, useEffect } from "react";
import Counter from "../Counter/Counter";
import './Products.css'

function Products(props) {
    let { productsData } = props;
    const [products, setProducts] = useState([]);
    const [cartContents, setCartContents] = useState({});

    let updateCart = (name, count) => {
        let currentCartContents=  cartContents;
        if(count>0)currentCartContents[name] = {count: count};
        else delete currentCartContents[name];
        setCartContents({ ...currentCartContents});
        console.log(cartContents);
    }

    useEffect(() => {
        let productList = [];
        let i = 0;
        for (const [name, productDetails] of Object.entries(productsData)) {
            productList.push(
                <div key={i++} className='productCard'>
                    <img className='productImg' src={productDetails.imageURL} />
                    <div>
                        <p id={`product${productDetails.productID}`}>{name}</p>
                        <p>{productDetails.description}</p>
                        <Counter productName={name} updateCart={updateCart} />
                    </div>
                </div>
            );
        }
        setProducts(productList);
    }, []);

    return (
        <div id='products'>
            {products}
        </div>
    );
}

export default Products;