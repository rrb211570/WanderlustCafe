import React from "react";
import './TrashCanCircle.css';

function TrashCanCircle({ deleteEntry, dateAndTime, productID }) {

    let hoverOnDelete = (e) => {
        e.currentTarget.querySelector('.trashCanCircle__bg').classList.add('hover');
    }

    let clickTrashBtn = (e) => {
        popLid(e);
        e.currentTarget.querySelector('.trashCanCircle__bg').classList.add('click');
    }

    let hoverOffDelete = (e) => {
        dropLid(e);
        e.currentTarget.querySelector('.trashCanCircle__bg').classList.remove('hover');
        e.currentTarget.querySelector('.trashCanCircle__bg').classList.remove('click');
    }

    let deleteAction = (e) => {
        dropLid(e);
        e.currentTarget.querySelector('.trashCanCircle__bg').classList.remove('click');
        deleteEntry(dateAndTime, productID);
    }

    let popLid = (e) => {
        e.currentTarget.querySelector('.trashCanCircle__lidImg').style.paddingTop = '0px';
        e.currentTarget.querySelector('.trashCanCircle__bodyImg').style.paddingTop = '2px';
        e.currentTarget.querySelector('.trashCanCircle__lidImg').style.transition = null;
        e.currentTarget.querySelector('.trashCanCircle__bodyImg').style.transition = null;
        e.currentTarget.style.backgroundColor = 'rgb(194, 194, 194);'
    }

    let dropLid = (e) => {
        e.currentTarget.querySelector('.trashCanCircle__lidImg').style.paddingTop = '2px';
        e.currentTarget.querySelector('.trashCanCircle__bodyImg').style.paddingTop = '0px';
        e.currentTarget.querySelector('.trashCanCircle__lidImg').style.transition = '0.1s padding ease-out';
        e.currentTarget.querySelector('.trashCanCircle__bodyImg').style.transition = '0.1s padding ease-out';
        e.currentTarget.style.backgroundColor = null;
    }

    return (
        <div className='trashCanCircle' onMouseDown={clickTrashBtn} onMouseUp={deleteAction} onMouseEnter={hoverOnDelete} onMouseLeave={hoverOffDelete}>
            <div className='trashCanCircle__bg'></div>
            <div className='trashCanCircle__images'>
                <img className='trashCanCircle__lidImg' src='trashCanLid.png' alt='trash can lid' onDragStart={() => { return false }} />
                <img className='trashCanCircle__bodyImg' src='trashCan.png' alt='trash can body' onDragStart={() => { return false }} />
            </div>
        </div>
    );
}

export default TrashCanCircle;