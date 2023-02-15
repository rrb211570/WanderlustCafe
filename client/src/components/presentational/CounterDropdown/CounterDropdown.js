import React, { useEffect, useState } from "react";
import './CounterDropdown.css'

function CounterDropdown({ identifiers, count, minQuantity, maxQuantity, updateFunction }) {
    let [options, setOptions] = useState([]);

    useEffect(() => {
        let myOptions = [];
        for (let i = minQuantity; i < maxQuantity; ++i) {
            myOptions.push(<option key={i} value={i}>{i}</option>);
        }
        myOptions.push(<option key={maxQuantity} value={maxQuantity}>{maxQuantity + ' (max)'}</option>);
        setOptions(myOptions);
    }, [])

    let updateCount = (e) => {
        updateFunction(...identifiers, parseInt(e.target.value, 10));
    }

    return (
        <div className='counterDropdown'>
            <select value={count} onChange={updateCount}>
                {options}
            </select>
        </div>
    );
}

export default CounterDropdown;