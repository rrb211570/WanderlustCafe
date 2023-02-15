import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Counter from "../../components/presentational/Counter/Counter";
import './OrderPreview.css';
import TrashCanCircle from './TrashCanCircle/TrashCanCircle';

function OrderDetails({ popUps, cartContents, updateCart }) {
    const [total, setTotal] = useState(0);
    let nav = useNavigate();

    let navToHome = () => {
        nav('/home')
    }

    let deleteEntry = (dateAndTime, productID) => {
        console.log('deleteEntry');
        updateCart(dateAndTime, productID, 0);
    }

    let createSelectionCards = (cartContents) => {
        let chosenEvents = [];
        let sum = 0;
        let index = 0;
        for (const [dateAndTime, selectedProducts] of Object.entries(cartContents)) {
            let selectionCards = [];
            for (const [productID, count] of Object.entries(selectedProducts)) {
                let unitsTotalCost = popUps.get(dateAndTime).productLineUp[productID].unitPrice * count;
                selectionCards.push(
                    <div key={productID} className='selectionCard'>
                        <div className='orderPreview__nameAndDelete'>
                            <TrashCanCircle deleteEntry={deleteEntry} dateAndTime={dateAndTime} productID={productID} />
                            <p>{popUps.get(dateAndTime).productLineUp[productID].name}</p>
                        </div>
                        <p>${unitsTotalCost.toFixed(2)}</p>
                        <Counter identifiers={[dateAndTime, productID]} count={count} minQuantity={1} maxQuantity={popUps.get(dateAndTime).productLineUp[productID].quantity} updateFunction={updateCart} />
                    </div>
                );
                sum += unitsTotalCost;
            }
            chosenEvents.push(
                <div key={dateAndTime} className='eventCard'>
                    <div className='orderPreview__dateAndTimeDiv'>
                        <p className='orderPreview__dateAndTime'>{dateAndTime}</p>
                    </div>
                    {selectionCards}
                </div>
            )
        }
        if (sum != total) setTotal(sum);
        return chosenEvents;
    }

    let submitOrder = (e) => {
        let orderDetails = getItemCounts(cartContents);
        console.log(orderDetails);
        fetch('https://us-central1-wanderlustcafe.cloudfunctions.net/api/checkout_session', {
            method: 'POST',
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
            <div id='orderPreview__nav'>
                <div id='orderPreview__navBack'>
                    <button id='orderPreview__navBackBtn' onClick={navToHome}>&#x2190;</button>
                </div>
                <p id='orderPreview__navHeader'>Confirm order</p>
                <div id='orderPreview__navBuffer'></div>
            </div>
            <div id='orderPreview__items'>
                {createSelectionCards(cartContents)}
            </div>
            <button id='orderPreview__checkoutBtn' onClick={submitOrder}>Pay {total == 0 ? '' : '$' + total}</button>
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

function OrderPreviewPanel({ popUps, cartContents, updateCart }) {
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
        <OrderDetails popUps={popUps} cartContents={cartContents} updateCart={updateCart} />
    );
}

export default OrderPreviewPanel;