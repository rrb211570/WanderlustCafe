import React from "react";
import './Counter.css'

function Counter({ dateAndTime, productName, productID, unitPrice, updateCart, count }) {

    let updateCount = (productName, direction) => {
        if (direction == 'down') {
            if (count > 0) updateCart(dateAndTime, productName, productID, unitPrice, count - 1);
        } else updateCart(dateAndTime, productName, productID, unitPrice, count + 1);
    }
    return (
        <div className='counter'>
            <button onClick={() => updateCount(productName, 'down')} style={{zIndex: '3'}}>-</button>
            <p style={{margin: '0'}}>{count}</p>
            <button onClick={() => updateCount(productName, 'up')} style={{zIndex: '3'}}>+</button>
        </div>
    );
}

export default Counter;