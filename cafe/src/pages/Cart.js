import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

function CartPanel() {
    let nav = useNavigate();
    let navToPayment = () => {
        // this.props.pageSwap('Menu')
    }
    return (
        <div className="Cart">
            <NavBar />
            <div>
                <div>
                    <p content="Selected"></p>
                </div>
                <div>
                    <p>Pickup: 7/15/22, 10AM-12PM, Ferry Plaza</p>
                </div>
                <div>
                    {/* items */}
                </div>
                <button onClick={navToPayment}>Pay</button>
            </div>
        </div>
    );
}

export default CartPanel;