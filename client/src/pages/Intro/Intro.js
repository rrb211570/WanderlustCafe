import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import OpeningScene from "../../components/OpeningScene/OpeningScene";
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
                <OpeningScene />
            </div>
            <img id='coffee' className='fadeOut' src='coffee.png' />
        </div>
    );
}

export default Intro;