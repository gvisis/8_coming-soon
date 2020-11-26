
/** renderSocial() funkcijai skirtu ivesties duomenu (input params) validacija
 * @param {string} selector Selektorius kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas 
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas. 
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, tai grazina `false`, priesingu atveju `true`
 */

function isInputValid(selector, data) {
    if (typeof selector !== 'string') {
        console.error('Error: selectorius turi buti tekstinio tipo.');
        return false;
    }
    if (typeof selector === '') {
        console.error('Error: selectorius negali buti tuscias tekstas.');
        return false;
    }
    if (!Array.isArray(data)){ //checkinam ar paduotas objektas yra array
        console.error('Error: social ikonom generuoti reikia saraso');
        return false;
    }
    if (data.length === 0){
        console.error('Error: social ikonom generuoti reikia ne tuscio array saraso');
        return false;
    }
    return true;
}
export { isInputValid };