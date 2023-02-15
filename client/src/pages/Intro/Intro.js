import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Intro.css'

function Intro() {
    let nav = useNavigate();

    useEffect(() => {
        setTimeout(() => { nav('/home'); }, 10000);
    }, []);

    return (
        <div id='intro'>
            <div className='fadeOut'>
                <div id='stripe1'></div>
                <div id='stripe2'></div>
                <div id='stripe3'></div>
                <div id='stripe4'></div>
                <div id='stripe5'></div>
            </div>
            <div id='currentMonth'>
                <p id='currentMonth__fadeOut'>Nov 2022</p>
            </div>
        </div>
    );
}

export default Intro;