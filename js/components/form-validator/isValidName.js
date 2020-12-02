function isValidName(name){
    const maxNameLength = 50;
    if (typeof name !== 'string'){
        return 'Vardas turi buti teksto tipo'
    }
    if (name === ''){
        return 'Vardas negali buti tuscias'
    }
    if (name.length > maxNameLength){
        return `Vardas negali virsyti ${maxNameLength} simboliu. (virsyta ${name.length - maxNameLength} simboliu)`
    }

    //? turi buti tik abeceles raides
    const abc = 'qwertyuiopasdfghjklzxcvbnm';

    //? tikrinam ar raide priklauso tekstui ar nepriklauso
    for (let letter of name){

        //? jeigu abc stringe yra panaudota neleistinas simbolis, error
        // if (!abc.includes(letter)) { ---- tikrina tik mazasias is saraso abc
        //? pasiimam raide is duoto inputo, susimazinam ja i lowercase ir tikrinam esanciam stringe. 
        if (!abc.includes(letter.toLowerCase())) {
            return `Varde panaudota neleistinas simbolis ${letter}`;
        }
    }

    //? pirma raide turi buti didzioji, visos kitos mazosios
    //* jei gauto vardo raides pavertus mazosiomis yra lygu pradinei reiksmei, reiskia jog vardas buvo vien tik is mazuju raidziu
    if (name.toLowerCase() === name) { // ASD -> asd, Rim -> rim, qwe -> qwe;
        return `Vardas ${name} negali buti vien tik is mazuju raidziu`;
    }
    
    //* jei pagaunam, jog ivesta vien didziosiomis, tai grazinam zinute - isjungti capslock
    //* PATIKRINIMUI susikuriam const, paimam nuline(pirma) vardo raide, pakeiciam ja i didziaja, likusia vardo dali nuslicinam ir pridedam mazosiomis.
    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLowerCase()
    if (realNameFormat !== name){
        return `Varda ${name} turi sudaryti pirma didzioji raide ir likusios mazosios raides`
    }
    
    return true;

}

export { isValidName }