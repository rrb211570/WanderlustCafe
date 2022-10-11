import React, { useState, useEffect } from "react";
import './Counter.css'

function Counter(props) {
    let { productName, updateCart } = props;
    const [count, setCount] = useState(0);

    let updateCount = (productName, direction) => {
        if (direction == 'down') {
            if (count > 0) {
                updateCart(productName, count - 1);
                setCount(count - 1);
            }
        } else {
            updateCart(productName, count + 1);
            setCount(count + 1);
        }
    }
    return (
        <div className='counter'>
            <button onClick={() => updateCount(productName, 'down')}>-</button>
            <p>{count}</p>
            <button onClick={() => updateCount(productName, 'up')}>+</button>
        </div>
    );
}

export default Counter;