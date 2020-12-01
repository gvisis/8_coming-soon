import { isValidProgressBarsList } from './isValidProgressBarsList.js';
import { isValidSingleProgressBar } from './isValidSingleProgressBar.js';
import { renderProgressBar } from './renderProgressBar.js';

/**
 * 
 * @param {Object[]} data
 * @param {string} data[].selector CSS like selectorius, kaip rasti vieta, kur sugeneruoti turini
 * @param {string} data[].title Progress bar pavadinimas
 * @param {number} data[].value Progress bar reiksme procentais
 * @returns {boolean} Funkcijai tinkamai suveikus grazinas `true`, priesingu atveju - `false`
 */
function renderAllProgressBars(data) {
    if (!isValidProgressBarsList(data)) {
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        const bar = data[i];

        if (!isValidSingleProgressBar(bar)) {
            continue;
        }

        renderProgressBar(bar.selector, bar.title, bar.value);
    }

    const allProgressBars = document.querySelectorAll('.progress-bar');

    addEventListener('scroll', () => {

        //! suskaiciuoja nuscrollinto ekrano ilgi nuo pacio puslapio virsaus iki matomos apacios
        const screenBottom = innerHeight + scrollY;
        //TODO jei yra sarasas ar objektas patogiausia naudoti sita cikla. ******** READ MORE ********
        for (let bar of allProgressBars) {

            // elemento apacia yra elemento aukstis + atsitraukimas nuo virsaus 
            // suskaiciuoja kiekvieno elemento apacia
            const barBottom = bar.offsetHeight + bar.offsetTop; 

                //? jeigu ekranoapacia daugiau uz elemento apacia
                if (screenBottom >= barBottom){

                    // uzdeda CLASS kiekvienam pamatytam progress barui, kuri turi animation stiliu
                    bar.classList.add('animate');
                    
                }
        }
        
        /* offsetHeight: 50 // elemento aukstis
        offsetWidth: 400 // koks elemento plotis
        offsetLeft: 113 // kiek atitoles nuo turinio kaires
        offsetTop: 949 // kiek atitoles nuo turinio virsaus */
    })

    return true;
}

export { renderAllProgressBars }