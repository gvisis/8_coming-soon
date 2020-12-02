import {isValidEmail} from './isValidEmail.js'
import {isValidText} from './isValidText.js'
import {isValidName} from './isValidName.js'

// export {isValidEmail,isValidName,isValidText}

//? pasidarom objekta is validaciju ir exportuojam. 
//? validation objekto key(raktazodziai,ex. email) spceialiai sutampa su terminais naudojamais HTML formose esanciuose data-validation reiksmes

const validation = {
    email: isValidEmail,
    text: isValidText,
    name: isValidName
}

export {validation}