import React from "react";
import './TrashCanGlow.css';

function TrashCanGlow({ num, deleteEntry }) {
    let hoverOnDelete = (e) => {
        e.currentTarget.querySelector('.trashCan__lid').style.transition = null;
        e.currentTarget.querySelector('.trashCan__body').style.transition = null;
        e.currentTarget.querySelector('.trashCan__lid').style.paddingTop = '0px';
        e.currentTarget.querySelector('.trashCan__body').style.paddingTop = '1px';
        //e.currentTarget.style.boxShadow = '0px 4px 0px -2px red';
        document.querySelector('#trashCan' + num + '__lidGlowAnimate').setAttribute("from", 0);
        document.querySelector('#trashCan' + num + '__lidGlowAnimate').setAttribute("to", 3);
        document.querySelector('#trashCan' + num + '__lidGlowAnimate').beginElement();
        document.querySelector('#trashCan' + num + '__bodyGlowAnimate').setAttribute("from", 0);
        document.querySelector('#trashCan' + num + '__bodyGlowAnimate').setAttribute("to", 2);
        document.querySelector('#trashCan' + num + '__bodyGlowAnimate').beginElement();
    }

    let hoverOffDelete = (e) => {
        e.currentTarget.querySelector('.trashCan__lid').style.transition = '0.1s padding ease-out';
        e.currentTarget.querySelector('.trashCan__body').style.transition = '0.1s padding ease-out';
        e.currentTarget.querySelector('.trashCan__lid').style.paddingTop = '1px';
        e.currentTarget.querySelector('.trashCan__body').style.paddingTop = '0px';
        document.querySelector('#trashCan' + num + '__lidGlowAnimate').setAttribute("from", 3);
        document.querySelector('#trashCan' + num + '__lidGlowAnimate').setAttribute("to", 0);
        document.querySelector('#trashCan' + num + '__lidGlowAnimate').beginElement();
        document.querySelector('#trashCan' + num + '__bodyGlowAnimate').setAttribute("from", 2);
        document.querySelector('#trashCan' + num + '__bodyGlowAnimate').setAttribute("to", 0);
        document.querySelector('#trashCan' + num + '__bodyGlowAnimate').beginElement();
    }

    return (
        <div className='trashCan'>
            <button className='trashCan__deleteButton' onClick={deleteEntry} onMouseEnter={hoverOnDelete} onMouseLeave={hoverOffDelete}>
                <svg className='trashCan__lid' width="100%" height="calc(50% - 5px)">
                    <filter id={'neonLid' + num}>
                        <feFlood floodColor="red" floodOpacity="0.5" in="SourceGraphic" />
                        <feComposite operator="in" in2="SourceGraphic" />
                        <feGaussianBlur id={'trashCan' + num + '__lidGlow'} stdDeviation="0" />
                        <feComponentTransfer result="glow1">
                            <feFuncA type="linear" slope="4" intercept="0" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode in="glow1" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <rect width="100%" height="100%" fill="rgba(255,255,255,0)" />
                    <image className='trashCan__lidImg' href='images/trashCanLid.png' alt='trash can lid' filter={'url(#neonLid' + num + ')'} />
                    <animate id={'trashCan' + num + '__lidGlowAnimate'} xlinkHref={'#trashCan' + num + '__lidGlow'} attributeName="stdDeviation" from="0" to="3" dur="0.1s" begin='' repeatCount="1" fill='freeze' />
                </svg>
                <svg className='trashCan__body' width="100%" height="calc(80% - 5px)">
                    <filter id={'neonBody' + num}>
                        <feFlood floodColor="red" floodOpacity="0.5" in="SourceGraphic" />
                        <feComposite operator="in" in2="SourceGraphic" />
                        <feGaussianBlur id={'trashCan' + num + '__bodyGlow'} stdDeviation="0" />
                        <feComponentTransfer result={'glow'+num}>
                            <feFuncA type="linear" slope="4" intercept="0" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode in={'glow'+num} />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <rect width="100%" height="100%" fill="rgba(255,255,255,0)" />
                    <image className='trashCan__bodyImg' href='images/trashCan.png' alt='trash can' filter={'url(#neonBody' + num + ')'} />
                    <animate id={'trashCan' + num + '__bodyGlowAnimate'} xlinkHref={'#trashCan' + num + '__bodyGlow'} attributeName="stdDeviation"
                        from="0" to="2" dur="0.1s" begin='' repeatCount="1" fill='freeze' />
                </svg>
            </button>
        </div >
    );
}

export default TrashCanGlow;