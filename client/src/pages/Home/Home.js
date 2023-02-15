import React, { useEffect, useState } from "react";
import Products from "../../components/presentational/Products/Products";
import CartPanel from "../../components/presentational/Cart/Cart";
import wheelHandler from "./handlers/wheelHandler";
import './css/Home.css';
import './css/snowflakes.scss'
import './css/SteelOrb.css'

let snowflakes = [...Array(100)].map((x, i) => <div key={i} className='snowflake'></div>);

function HomePanel({ popUps, cartContents, updateCart }) {
    const [venueOptions, setVenueOptions] = useState(null);
    const [selectedVenueDateAndTime, setSelectedVenueDateAndTime] = useState(null);
    const [selectedVenueLocation, setSelectedVenueLocation] = useState(null);
    const [selectedVenueProductLineUp, setSelectedVenueProductLineUp] = useState([]);

    useEffect(() => {
        let venueOptions = [];
        Array.from(popUps.keys()).map(
            (dateAndTime, idx) => {
                if (idx == 0) {
                    setSelectedVenueDateAndTime(dateAndTime);
                    let event = popUps.get(dateAndTime);
                    setSelectedVenueLocation(event.location);
                    setSelectedVenueProductLineUp(event.productLineUp);
                }
                venueOptions.push(<option key={idx} value={dateAndTime}>{dateAndTime}</option>);
            })
        setVenueOptions(venueOptions);
        applyWheelListener();
    }, []);

    let newLineUp = (e) => {
        setSelectedVenueDateAndTime(e.target.value);
        let event = popUps.get(e.target.value);
        setSelectedVenueLocation(event.location);
        setSelectedVenueProductLineUp(event.productLineUp);
    }

    let getItemCount = () => {
        let totalCount = 0;
        for (const selectedProducts of Object.values(cartContents)) {
            for (const itemCount of Object.values(selectedProducts)) {
                totalCount += itemCount;
            }
        }
        return totalCount;
    }

    return (
        <div id='home'>
            <div className='snowfall'>{snowflakes}</div>
            <div id='lamp1'></div>
            <div id='home__content'>
                <div id='home__navBar'>
                    <div id='home__productVenue'>
                        <select name="dateAndTime" id="venueDateAndTime" onChange={newLineUp}>
                            {venueOptions}
                        </select>
                        <div id='venueLocation'>
                            <p>{selectedVenueLocation}</p>
                        </div>
                    </div>
                    <p id='logo'>by Wanderlust Cafe</p>
                </div>
                <Products dateAndTime={selectedVenueDateAndTime} productLineUp={selectedVenueProductLineUp} cartContents={cartContents} updateCart={updateCart} />
            </div>
            <div id='home__sideBar'>
                <CartPanel itemsInCart={getItemCount()} />
            </div>
        </div>
    );
}

function applyWheelListener() {
    window.addEventListener('wheel', wheelHandler);
}

export default HomePanel;