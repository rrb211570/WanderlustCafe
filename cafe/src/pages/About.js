import React from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";

function AboutPanel() {
    let nav = useNavigate();
    let navToHome = () => {
        nav('/');
    };
    return (
        <div className="About">
            <NavBar/>
            <div>
                I started Wanderlust Cafe in 2022, out of frustration at the lack of healthy options in the area.

                As a seasoned home cook, I've gained the experience to understand that if you cook smart, you don't have to compete between flavor and health.

                With a focus on whole grains and lentils, fruits and nuts, I hope you appreciate the results of my efforts, lightly sweetened.
                
                - Rakesh Bandi
            </div>
        </div>
    );
}

export default AboutPanel;