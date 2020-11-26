import { isInputValid } from "./isInputValid.js";
import { isValidSocialItem } from "../isValidSocialItem.js"
render
/**
 * Social nuorodu generavimas is pateiktu duomenu i nurodyta vieta DOM'e
 * @param {string} selector Selektorius kaip rasti norima vieta, kur bus istatomas sugeneruotas kodas 
 * @param {Array} data Duomenu masyvas su objektais, kurie reprezentuoja social nuorodas. 
 * @returns {boolean} Logikos vykdymo metu radus klaida grazins `false`, o funkcijai suveikus teisingai - `true` 
 */
function renderSocials(selector, data){
    //?input validation
    if (!isInputValid(selector, data)){
        return false;
    }

    //?logic
    const socialsDOM = document.querySelector(selector); // SELEKTORIUS - randa vieta, kur istatyti teksta 

    //patikrinimas ar pavyko rasti vieta turinio generavimui
    if (!socialsDOM){
        console.error('Error: nerasta turinio generavimo vieta');
        return false;
    }

    let HTML = '';

    for (let i = 0; i < data.length; i++){
        const item = data[i];

        if (!isValidSocialItem(item)){
            continue;
        }
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`

        // console.log(item);
        // console.log(item.link, item.icon); //spausdina is datos paimta turini
    }
    //?post logic validation - patikrinimas
    if (HTML === '') {
        console.error('Error: nepavyko sugeneruoti social ikonu/nuorodu');
        return false
    }    
    //?return
    socialsDOM.innerHTML = HTML;  //narsykle suranda socialsDOM documente queryselektoriu "footer > .row", ir ipastina html KODA is funkcijos kur HTML === kazkas. 
}


export { renderSocials };