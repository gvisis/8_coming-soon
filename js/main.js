import { renderSocials } from "./components/socials/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from './components/clock/renderClock.js';

import { renderAllProgressBars } from './components/progress-bar/renderAllProgressBars.js';
import { progressBarData } from './data/progressBarData.js';
import { formValidator } from './components/form-validator/formValidator.js'
renderSocials('footer > .row', socialsData);


renderClock('.clock');

//? Negeras variantas uzrasyti, nes neautomatiskai :)) 
// renderProgressBar('.column.left', 'Web development', 90);
// renderProgressBar('.column.left', 'Web design', 80);
// renderProgressBar('.column.left', 'UX', 40);

renderAllProgressBars(progressBarData);

formValidator('.hero .form');
formValidator('main .form');

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