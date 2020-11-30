import { countTimeDiff } from './countTimeDiff.js'
// TARGET DATE is new years evening.
// 2021-01-01 00:00:00

/**
 * Generuoja statini laikrodi, kuris parodo kiek liko laiko iki artmiausiu naujuju metu. 
 * @param {string} selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys 
 * @returns {boolean} Jei funkcija sekmingai ivykdo savo funkcionaluma, tai grazina `true`, priesingu atveju - `false`
 */
function renderClock(selector) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selectorius turi buti tekstinio tipo');
        return false;
    }
    if (selector == '') {
        console.error('ERROR: selectorius negali buti tuscias tekstas');
        return false;
    }
    const DOM = document.querySelector(selector);
    
    if (!DOM) {
        console.error('Error: nerasta vieta, kur sugeneruoti laikrodzio HTML turini');
        return false;
    }
    const time = countTimeDiff();
    
    const HTML = `<div class="time-box">
                    <div class="time">${time.days}</div>
                    <span>Days</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${time.seconds}</div>
                    <span>Seconds</span>
                </div>`;

    DOM.innerHTML = HTML;

    const timesDOM = DOM.querySelectorAll('.time'); 
    console.log(timesDOM[3]);

    //paleidziame laikrodzio mechanizma
    let timePassed = 0;
    setInterval(() => {
        const time = countTimeDiff();
        timesDOM[0].innerText = time.days;
        timesDOM[0].innerText = time.days;
        timesDOM[0].innerText = time.days;
        timesDOM[3].innerText = time.seconds;
    }, 1000); 


    return true;
}

export { renderClock }