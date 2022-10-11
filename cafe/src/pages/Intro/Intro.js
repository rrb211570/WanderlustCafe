import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import OpeningScene from "../../components/OpeningScene/OpeningScene";
import './Intro.css'

function Intro() {
    let nav = useNavigate();

    useEffect(() => {
        setInterval(() => { nav('/home'); }, 9000);
    }, []);

    return (
        <div id='intro'>
            <OpeningScene />
        </div>
    );
}

export default Intro;