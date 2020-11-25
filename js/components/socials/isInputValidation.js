function isInputValidation(data) {
    if (!Array.isArray(data)){ //checkinam ar paduotas objektas yra array
        console.error('Error: social ikonom generuoti reikia saraso');
        return false;
    }
    if (data.length === 0){
        console.error('Error: social ikonom generuoti reikia ne tuscio array saraso');
        return false;
    }
    return true;
}
export { isInputValidation };