// TARGET DATE is new years evening.
// 2021-01-01 00:00:00

/**
 * Generuoja statini laikrodi, kuris parodo kiek liko laiko iki artmiausiu naujuju metu. 
 * @param {string} selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys 
 * @returns {*}
 */
function renderClock(selector) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Error: nerasta vieta, kur sugeneruoti laikrodzio HTML turini');
        return false;
    }

    // einamieji metai (2020)
    const date = new Date();
    
    //! KAIP PANAUDOTI BE CONST? 
    const currentYear = date.getFullYear();
    console.log(currentYear);

    // naujakas = einamieji metai + 1 ( 2020 + 1 = 2021 )
    const newYear = currentYear + 1;
    
    // susikonstrojame pilna data: ${naujakas}-01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;

    //
    const newYearObject = new Date(newYearDate);

    //
    const newYearMilliseconds = newYearObject.getTime();

    // einamasis laikas yyyy-mm-dd hh:mm:ss
    // currentTime / 1000 / 60 / 60/ 24 / 365.25
    const currentTimeMilliseconds = date.getTime();
    
    // suskaiciuojame laiko skirtuma
    const timeLeft = newYearMilliseconds - currentTimeMilliseconds;
    let secondsLeft = timeLeft / 1000;


    // norint ji apskaiciuoti reikia nuo reikiamos datos atimti currentTime (1970) 
    // is skirtumo apskaiciuojame likusias dienas, valandas, minutes ir sekundes
    const days = Math.floor(secondsLeft / 60 / 60 / 24);

    //atimam likusias sekundes ar dienas
    secondsLeft -= days * 60 * 60 * 24;
    // gauna nepanaudotas sekundes kurias isdalina valandoms ?? what.
    // const hours = Math.floor((secondsLeft - days * 60 * 60 * 24) / 60 / 60);
    const hours = Math.floor(secondsLeft / 60 / 60)
    secondsLeft -= hours * 60 * 60;
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = Math.floor(secondsLeft - minutes * 60);

    const HTML = `<div class="time-box">
                    <div class="time">${days}</div>
                    <span>Days</span>
                </div>
                <div class="time-box">
                    <div class="time">${hours}</div>
                    <span>Hours</span>
                </div>
                <div class="time-box">
                    <div class="time">${minutes}</div>
                    <span>Minutes</span>
                </div>
                <div class="time-box">
                    <div class="time">${seconds}</div>
                    <span>Seconds</span>
                </div>`
    DOM.innerHTML = HTML;
    return true;

}

export { renderClock }