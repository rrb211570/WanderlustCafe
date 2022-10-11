import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Products from "../../components/Products/Products";
import Logo from './../../components/Logo/Logo'
import './Home.css'

let productsData =
{
    blah: { imageURL: 'tulip.png', description: 'hmm fsadsad fsadf sdafsadfsadf sadf sadf sadfsdafsadf sdf' },
    blah2: { imageURL: 'tulip.png', description: 'hmm fsadsad fsadf sdafsadfsadf sadf sadf sadfsdafsadf sdf' },
    blah3: { imageURL: 'tulip.png', description: 'hmm fsadsad fsadf sdafsadfsadf sadf sadf sadfsdafsadf sdf' },
    blah4: { imageURL: 'tulip.png', description: 'hmm fsadsad fsadf sdafsadfsadf sadf sadf sadfsdafsadf sdf' },
    blah5: { imageURL: 'tulip.png', description: 'hmm fsadsad fsadf sdafsadfsadf sadf sadf sadfsdafsadf sdf' }
};

let i = 0;
for (const key of Object.keys(productsData)) {
    productsData[key].productID = i++;
}

function HomePanel() {
    let nav = useNavigate();
    const [showingProducts, setShowingProducts] = useState(true);

    let toggleHomeContents = () => {
        if (showingProducts) {
            document.querySelector('#home__products').style.opacity = 0;
            document.querySelector('#home__about').style.opacity = 1;
            document.querySelector('#home__toggleHomeContents').innerText = 'Back';
            setShowingProducts(false);
        } else {
            document.querySelector('#home__about').style.opacity = 0;
            document.querySelector('#home__products').style.opacity = 1;
            document.querySelector('#home__toggleHomeContents').innerText = 'About';
            setShowingProducts(true);
        }
    }

    let navToCart = () => {
        nav('/cart');
    }
    return (
        <div id='home'>
            <div id='home__content'>
                <div>
                    <div id='home__navBar'>
                        <button id='home__toggleHomeContents' onClick={toggleHomeContents}>About</button>
                        <button id='home__cart' onClick={navToCart}>Cart</button>
                    </div>
                    <div id='home__products'>
                        <Products productsData={productsData} />
                    </div>
                    <div id='home__about'>
                        I started Wanderlust Cafe in 2022, out of frustration at the lack of healthy options in the area.

                        As a seasoned home cook, I've gained the experience to understand that if you cook smart, you don't have to compete between flavor and health.

                        With a focus on whole grains and lentils, fruits and nuts, I hope you appreciate the results of my efforts, lightly sweetened.

                        - Rakesh Bandi
                    </div>
                </div>

            </div>
            <div id='home__footer'>
                <Logo />
            </div>
        </div>
    );
}

export default HomePanel;