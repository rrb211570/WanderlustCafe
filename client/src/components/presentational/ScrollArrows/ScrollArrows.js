import React from "react";
import './ScrollArrows.css';

function ScrollArrows() {
    return (
        <div id='scrollArrows'>
            <img id='scrollArrows__up' src='arrow.png' alt='Arrow to scroll up' />
            <img id='scrollArrows__down' src='arrow.png' alt='Arrow to scroll down' />
        </div>
    );
}

export default ScrollArrows;