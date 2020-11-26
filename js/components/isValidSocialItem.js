/** 
 * renderSocial() funkcijos metu vykdomame cikle skirtu duomenu validacija 
 * @param {object} itemObject Objektas aprasnatis viena social nuoroda, kuri sudaro ikona ir nuoroda (href) 
 * @returns {boolean} Jei patikrinimo metu randama logine duomenu klaida, tai grazina `false`, priesingu atveju `true`
 */

function isValidSocialItem(itemObject) {
    if (typeof itemObject !== 'object'){ //jei tipas ne objektas
        console.warn('Error: Object is not an object');
        return false;
        // continue; // ieskok toliau objektu
    }
    if (typeof itemObject.link !== 'string' || itemObject.link === ''){
        console.warn('Error: Objects element link has to be text and not empty');
        return false;
    }
    if (typeof itemObject.icon !== 'string' || itemObject.icon === ''){
        console.warn('Error: Objects element has to have a text and not empty');
        return false
    }
    return true;
}

export { isValidSocialItem }