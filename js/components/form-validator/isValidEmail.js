function isValidEmail(email){

    const maxEmailLength = 50;
    
    //? jei ne string tipas
    if (typeof email !== 'string'){
        return 'El. pastas turi buti teksto tipo.'
    }
    //? jei tuscias
    if (email === ''){
        return 'El. pastas negali buti tuscias.'
    }
    //? jei teksto ilgis yra daugiau uz nustatyta
    if (email.length > maxEmailLength){
        return `El. pastas negali buti ilgesnis nei ${maxEmailLength} simboliu (virsyta ${email.length - maxEmailLength} simboliu)`
    }
    return true;

}
export { isValidEmail }


