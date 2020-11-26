import { renderSocials } from './components/socials/renderSocials.js';

import { socialsData } from './data/socialsData.js';

renderSocials('footer > .row', socialsData);

//----------------------
// skirtingose vietose '.main > .row' ir footer.row generuos ta pati turini is socialsData
// renderSocials('main > .row', socialsData2);
//------------------------
/* const h1DOM = document.querySelector('h1'); // randa viena ir pirma elementa su tagu h1;; querySelector yra vienas elementas
const inputDOM = document.querySelectorAll('input'); // suras visus inputus .form klaseje
const nonsenseDOM = document.querySelectorAll('.earfsd') //nieko nerodys, nes neras tokio;; querySelectorAll yra sarasas

console.log(h1DOM);
console.log(inputDOM);
console.log(nonsenseDOM);

h1DOM.innerText = 'KACYCE'; //overrides teksta sito consto selectoriui. */
//-----------