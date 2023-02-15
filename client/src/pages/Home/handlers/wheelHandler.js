// wheelHandler.js

let count = 10;
function wheelHandler(event) {
    if (!/.*home$/.test(window.location.href)) return;
    let parentDivHeight = parseInt(document.querySelector('#products').offsetHeight, 10);
    let listHeight = parseInt(document.querySelector('#products__cards').scrollHeight, 10)
    let lowestPixel = listHeight - parentDivHeight;
    //console.log('scrolling: ' + event.deltaY + ' ' + count + ' ' + parentDivHeight + ' ' + listHeight + ' ' + lowestPixel);
    if (event.deltaY > 0) {
        count += 50;
        if (count > lowestPixel - 100) count = lowestPixel;
        document.querySelector('#products__cards').scroll({
            top: count,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        count -= 50;
        if (count < 100) count = 0;
        document.querySelector('#products__cards').scroll({
            top: count,
            left: 0,
            behavior: 'smooth'
        });
    }
}

export default wheelHandler;