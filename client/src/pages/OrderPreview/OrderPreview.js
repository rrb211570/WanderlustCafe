import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CounterDropdown from "../../components/CounterDropdown/CounterDropdown";
import './OrderPreview.css'

function OrderDetails({ cartContents, setCartContents }) {
    let nav = useNavigate();

    let navToHome = () => {
        nav('/home')
    }

    let updateCart = (dateAndTime, productName, count) => {
        let currentCartContents = cartContents;
        currentCartContents[dateAndTime][productName].count = count;
        setCartContents({ ...currentCartContents });
    }

    let createSelectionCards = (cartContents) => {
        let chosenEvents = [];
        let total = 0;
        for (const [dateAndTime, selectedProducts] of Object.entries(cartContents)) {
            let selectionCards = [];
            for (const [name, selectionDetails] of Object.entries(selectedProducts)) {
                selectionCards.push(
                    <div key={name} className='selectionCard'>
                        <CounterDropdown dateAndTime={dateAndTime} productName={name} updateCart={updateCart} count={selectionDetails.count} />
                        <p>{name}</p>
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

    let submitOrder = (e) => {
        let orderDetails = getItemCounts(cartContents);
        console.log(orderDetails);
        fetch('https://us-central1-wanderlustcafe.cloudfunctions.net/api/checkout_session', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderDetails: orderDetails }),
        })
            .then((res) => res.json())
            .then((body) => {
                console.log(body);
                if (body.status == 'success') window.location.href = body.url;
                else {
                    console.log(body.error);
                }
            });
    }

    return (
        <div id='orderPreview'>
            <button onClick={navToHome}>Back</button>
            <div>
                <p>Confirm order</p>
                {createSelectionCards(cartContents)}
                <button id='orderPreview__checkoutBtn' onClick={submitOrder}>
                    Checkout
                </button>
            </div>
        </div>
    );
}

function getItemCounts(cartContents) {
    let orderDetails = {};
    for (const [dateAndTime, selectedProducts] of Object.entries(cartContents)) {
        for (const [name, selectionDetails] of Object.entries(selectedProducts)) {
            orderDetails[selectionDetails.productID] = selectionDetails.count;
        }
    }
    return orderDetails;
}

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

function OrderPreviewPanel({ cartContents, setCartContents }) {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return message ? (
        <Message message={message} />
    ) : (
        <OrderDetails cartContents={cartContents} setCartContents={setCartContents} />
    );
}

export default OrderPreviewPanel;