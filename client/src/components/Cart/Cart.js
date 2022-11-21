import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'

function CartPanel({ cartContents }) {
    let nav = useNavigate();

    let navToOrderPreview = () => {
        console.log(cartContents);
        nav('/orderPreview');
    }

    let createSelectionCards = (cartContents) => {
        let chosenEvents = [];
        let total = 0;
        for (const [dateAndTime, selectedProducts] of Object.entries(cartContents)) {
            let selectionCards = [];
            for (const [name, selectionDetails] of Object.entries(selectedProducts)) {
                selectionCards.push(
                    <div key={name} className='selectionCard'>
                        <p>{name} ({selectionDetails.count})</p>
                        <p>{selectionDetails.unitPrice * selectionDetails.count}</p>
                    </div>
                );
                total += selectionDetails.unitPrice * selectionDetails.count
            }
            chosenEvents.push(
                <div key={dateAndTime} className='eventCard'>
                    <p>{dateAndTime}</p>
                    {selectionCards}
                </div>
            )
        }
        chosenEvents.push(<div key='__total' id='cart__total'>Total: {total}</div>);
        return chosenEvents;
    }
    return (
        <div id="cart">
            <button className='cart__order' onClick={navToOrderPreview}><img className='cartImg' src='cart.png' /></button>
        </div>
    );
}

export default CartPanel;