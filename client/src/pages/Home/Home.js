import React, { useEffect, useState } from "react";
import Products from "../../components/Products/Products";
import CartPanel from "../../components/Cart/Cart";
import Logo from './../../components/Logo/Logo'
import './css/Home.css';
import './css/snowflakes.scss'

function HomePanel({ popUps, cartContents, setCartContents }) {
    const [showingPopUps, setShowingPopUps] = useState(true);
    const [location, setLocation] = useState(null);
    const [productLineUp, setProductLineUp] = useState([]);

    useEffect(() => {
        let event = popUps.get(popUps.keys().next().value);
        setLocation(event.location);
        setProductLineUp(event.productLineUp);

        applyWheelListener();
    }, []);

    let toggleHomeContents = () => {
        if (showingPopUps) {
            document.querySelector('#home__productVenue').style.opacity = 0;
            document.querySelector('#home__productVenue').style.zIndex = -1;
            document.querySelector('#home__productsPanel').style.opacity = 0;
            document.querySelector('#home__productsPanel').style.zIndex = -1;

            document.querySelector('#home__about').style.opacity = 1;
            document.querySelector('#home__about').style.zIndex = 1;
            document.querySelector('#home__toggleHomeContents').innerText = 'Back';
            setShowingPopUps(false);
        } else {
            document.querySelector('#home__about').style.opacity = 0;
            document.querySelector('#home__about').style.zIndex = -1;

            document.querySelector('#home__productVenue').style.opacity = 1;
            document.querySelector('#home__productVenue').style.zIndex = 1;
            document.querySelector('#home__productsPanel').style.opacity = 1;
            document.querySelector('#home__productsPanel').style.zIndex = 1;
            document.querySelector('#home__toggleHomeContents').innerText = 'About';
            setShowingPopUps(true);
        }
    }

    let newLineUp = (e) => {
        for (let dateAndTime of popUps.keys()) {
            if (dateAndTime == e.target.value) {
                let event = popUps.get(dateAndTime);
                setLocation(event.location);
                setProductLineUp(event.productLineUp);
                break;
            }
        }
    }
    let snowflakes = [...Array(100)].map((x, i) => <div key={i} className='snowflake'></div>);

    return (
        <div id='home'>
            <div id='background'></div>
            <div id='overlay'></div>
            <div className='snowfall'>{snowflakes}</div>
            <div id='lamp1'></div>
            <div id='lamp2'></div>
            <div id='lamp3'></div>
            <div id='home__content'>
                <div id='home__navBar'>
                    <button id='home__toggleHomeContents' onClick={toggleHomeContents}>About</button>
                    <div>
                        <div id='home__productVenue'>
                            <select name="dateAndTime" id="dateAndTime-select" onChange={newLineUp}>
                                <option value="10/29/22, 10AM-2PM">10/29/22, 10AM-2PM</option>
                                <option value="11/5/22, 10AM-2PM">11/5/22, 10AM-2PM</option>
                            </select>
                            <p>{location}</p>
                        </div>
                        <div id='home__about'>
                            <p id='home__aboutMsg'>
                                I started Wanderlust Cafe in 2022, out of frustration at the lack of healthy options in the area.

                                As a seasoned home cook, I've gained the experience to understand that if you cook smart, you don't have to compete between flavor and health.

                                With a focus on whole grains and lentils, fruits and nuts, I hope you appreciate the results of my efforts, lightly sweetened.

                                - Rakesh Bandi
                            </p>
                        </div>
                    </div>

                </div>
                <div id='home__productsPanel'>
                    <div id='home__products'>
                        <Products productLineUp={productLineUp} cartContents={cartContents} setCartContents={setCartContents} />
                    </div>
                    <div id='home__productsOverlay'></div>
                </div>
                <div id='home__footer'>
                    <Logo />
                </div>
            </div>
            <div id='home__sideBar'>
                <CartPanel cartContents={cartContents} />
            </div>
        </div>
    );
}

function applyWheelListener() {
    window.addEventListener('wheel', wheelHandler);
}

let count = 10;
function wheelHandler(event) {
    if (!/.*home$/.test(window.location.href)) return;
    let parentDivHeight = parseInt(document.querySelector('#home__products').offsetHeight, 10);
    let listHeight = parseInt(document.querySelector('#products').scrollHeight, 10)
    let lowestPixel = listHeight - parentDivHeight;
    //console.log('scrolling: ' + event.deltaY + ' ' + count + ' ' + parentDivHeight + ' ' + listHeight + ' ' + lowestPixel);
    if (event.deltaY > 0) {
        count += 50;
        if (count > lowestPixel - 100) count = lowestPixel;
        document.querySelector('#products').scroll({
            top: count,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        count -= 50;
        if (count < 100) count = 0;
        document.querySelector('#products').scroll({
            top: count,
            left: 0,
            behavior: 'smooth'
        });
    }
}

export default HomePanel;