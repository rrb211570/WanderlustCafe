import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'

function CartPanel({ itemsInCart }) {
    let nav = useNavigate();

    let navToOrderPreview = () => {
        nav('/orderPreview');
    }

    return (
        <div id="cart">
            <button className={`cart__order${itemsInCart == 0 ? 'Disabled' : ''}`} onClick={navToOrderPreview} disabled={itemsInCart == 0}>
                <img id='cart__img' src='cart.png' alt='shopping cart' />
                <div id='cart__itemCount' style={{ opacity: itemsInCart == 0 ? '0' : '1' }}>
                    <p id='cart__itemCountNum'>{itemsInCart}</p>
                </div>
            </button>
        </div>
    );
}

export default CartPanel;