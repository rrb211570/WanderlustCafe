import React from "react";
import './Counter.css'

function Counter({ identifiers, count, minQuantity, maxQuantity, updateFunction }) {

    let addHover = (e) => {
        e.currentTarget.classList.add('hover');
    }

    let addClickedAndClickFade = (e) => {
        e.currentTarget.classList.add('clicked');
        e.currentTarget.classList.add('clickFade');
    }

    let updateCount = (e, direction) => {
        removeClicked(e);
        if (direction == 'down') {
            if (count > minQuantity) updateFunction(...identifiers, count - 1);
        } else if (count < maxQuantity) updateFunction(...identifiers, count + 1);
    }

    let removeClicked = (e) => {
        e.currentTarget.classList.remove('clicked');
    }

    let removeAll = (e)=>{
        e.currentTarget.classList.remove('clicked');
        e.currentTarget.classList.remove('hover');
        e.currentTarget.classList.remove('clickFade');
    }

    return (
        <div className='counter'>
            <button className='counter__btnLeft' onMouseDown={addClickedAndClickFade} onMouseUp={(e) => updateCount(e, 'down')} onMouseEnter={addHover} onMouseLeave={removeAll} disabled={count==minQuantity? true : false} >-</button>
            <p className='counter__value'>{count}</p>
            <button className='counter__btnRight' onMouseDown={addClickedAndClickFade} onMouseUp={(e) => updateCount(e, 'up')} onMouseEnter={addHover} onMouseLeave={removeAll} disabled={count==maxQuantity? true : false}>+</button>
        </div>
    );
}

export default Counter;