import React, { useState } from "react";
import './CounterDropdown.css'

function CounterDropdown({ dateAndTime, productName, updateCart, count }) {

    let updateCount = (e) => {
        updateCart(dateAndTime, productName, parseInt(e.target.value, 10));
    }

    return (
        <div className='counterDropdown'>
            <select name="count" id={productName + '-count'} onChange={updateCount} defaultValue={count}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>{5 + ' (max)'}</option>
            </select>
        </div>
    );
}

export default CounterDropdown;