import { isInputValidation } from "./isInputValidation.js";

function renderSocials(data){
    //?input validation
    if (!isInputValidation(data)){
        return false;
    }

    //?logic
    const socialsDOM = document.querySelector('footer > .row'); // surandam, kad FUNKCIJA butu atspausdinta
    let HTML = '';

    for (let i = 0; i < data.length; i++){
        const item = data[i];
        if (typeof item !== 'object'){ //jei tipas ne objektas
            continue; // ieskok toliau objektu
        }
        if (typeof item.link !== 'string' || item.link === ''){
            console.log('tuscia');
            continue;
        }
        if (typeof item.icon !== 'string' || item.icon === ''){
            console.log('tuscia');
            continue;
        }
        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`

        // console.log(item);
        // console.log(item.link, item.icon); //spausdina is datos paimta turini
    }
    //?post logic validation
    if (HTML === '') {
        console.error('Error: nepavyko sugeneruoti social ikonu/nuorodu');
        return false
    }    
    //?return
    socialsDOM.innerHTML = HTML;  //narsykle suranda socialsDOM documente queryselektoriu "footer > .row", ir ipastina html KODA is funkcijos kur HTML === kazkas. 
}


export { renderSocials };