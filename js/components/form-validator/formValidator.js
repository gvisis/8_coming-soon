import { validation } from './validationRules.js' // biblioteka kur yra validacijos

/**
 * Formos validavima atliekanti funkcija, kuri automatiskai pazista kokiems ivesties laukams reikia taikyti validacijos taisykles ir pagal tai atvaizduoja atitinkamus pranesimus
 * @param {string} selector CSS like selector
 * @param {Object} toastObject Objektas i kuri reikia kreiptis, norint atvaizduoti pranesimus. Erorr or Success
 * @returns {boolean} Funkcijai sekmingai suveikus grazinamas 'true', priesingu aveju 'false'
 */
function formValidator(selector, toastObject) {
    //? susirandam kur yra forma, pagal funkcijai perduota selectoriu 
    const formDOM = document.querySelector(selector);

    //? susirandam kur yra submit mygtukas
    //? input html tagas. Surandat atributa tage reikia lauztiniu skliaustu [];
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]');

    //?  susirandam likusius inputus, tik ne submit tipo. 
    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])');

    //? susirandam visas textarea vietas, kur bus rasomas tekstas
    const allTextareaDOMs = formDOM.querySelectorAll('textarea');

    //? sarasas[array], kur bus visi inputai, ir visos text area; 
    const allElements = [...allInputDOMs, ...allTextareaDOMs];

    if (allElements.length === 0){
        toastObject.show('error','Formoje nerasta nei vieno input ar textarea elementu')
        return false;
    }

    //? kai paspausime sita mygtuka - submitBtnDOM , ivyks kazkas 
    //? kiekvieno paspaudimo metu, funkcija turi eiti ir tikrinti
    submitBtnDOM.addEventListener('click', (event) => {
        event.preventDefault();
        let errorCount = 0;
        for (let input of allElements) {
            //? Reikia kreiptis i kiekviena input'a , kad gauti jo reiksme. 

            //? Norint issitraukti is objekto data REIKSME kreiptis i ji su *validation* html data tipu. ex: html <input> tage, turi buti data-validation="pavadinimas" . 
            //? elementas.dataset.datosPavadinimasHTMLTage;
            const validationRule = input.dataset.validation;

            //? norint issitraukti inputo teksta naudoti inputas.value 
            const text = input.value;


            //! Logiskesnis uzrasymas, nes funkcija patikrins tik kiekviena taisykle atskirai. Pries tai tikrino kiekviena atskirai, bet taip pat emailus ir textus nors nereikejo.
            //? patikrinam pagal taisykles, ar ivestas tekstas i datatipa name yra validus vardas   
            //? gausim teksta is vardo validacijos ir ji isprintinsim 
            // if (validationRule === 'name'){

            //* validation yra bibliotekos pavadinimas
            //* validationRule yra ka istraukiam    
            const validationFunction = validation[validationRule];
            const error = validationFunction(text);
            if (error !== true) {
                toastObject.show('error', error);

                //? pridedami errorCount++ jei nors viena funkcija prides errorcounta, formos neissius. Ir isspausdins errora tik tada, kai bus erras.
                errorCount++

                //? padaro, kad klaidos pranesima mestu ties pirma sutikta klaida
                break; 
            }
        }

        //* 2. versija kodas buvo sutrumpintas VEL virsuje
        // if (validationRule === 'email'){
        //     const emailError = isValidEmail(text);
        //     if (emailError !== true){
        //         console.log(emailError);
        //         errorCount++
        //     }
        // }

        // if (validationRule === 'text'){
        //     const textError = isValidText(text);
        //     if (textError !== true){
        //         console.log(textError);
        //         errorCount++
        //     }
        // }
        //! 1. versija Neteisingas uzrasymas. Pakeista virsuje
        //     if (validationRule === 'name' && nameError !== true) {
        //         console.log(nameError);
        //         errorCount++;
        //     }
        //     if (validationRule === 'email' && emailError !== true) {
        //         console.log(emailError);
        //         errorCount++;
        //     }
        //     if (validationRule === 'text' && textError !== true) {
        //         console.log(textError);
        //         errorCount++;
        //     }
        // };

        //? issius/isspausdins tik tada, kai nebus nei vieno error
        if (errorCount === 0) {
            toastObject.show('success', "Sekmingai issiusta info")
        }
    });
    return true;
}
export { formValidator }