import React from "react";
import { useNavigate } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    let nav = useNavigate();
    let navigateToPage = (target) => {
        let url = window.location.href;
        let regex = new RegExp(target + '$', 'g')
        let isDiff = regex.test(url);
        if (!isDiff) nav(target);
    }
    return (
        <div id='navBar'>
            <button onClick={() => navigateToPage('/home')}>Home</button>
            <button onClick={() => navigateToPage('/about')}>About</button>
            <button onClick={() => navigateToPage('/cart')}>Cart</button>
        </div>
    );
}

export default NavBar;