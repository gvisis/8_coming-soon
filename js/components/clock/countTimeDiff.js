function countTimeDiff(){
       // einamieji metai (2020)
       const date = new Date();
    
       //?gets the year now
       const currentYear = date.getFullYear();
   
       // naujakas = einamieji metai + 1 ( 2020 + 1 = 2021 )
       const newYear = currentYear + 1;
       
       // susikonstrojame pilna data: ${naujakas}-01-01 00:00:00
       //? Ka laikrodis turi rodyti, kad butu nauji metai
       const newYearDate = `${newYear}-01-01 00:00:00`;
   
       //pasidarom nauja data, paimdami newYearDate
       const newYearObject = new Date(newYearDate);
   
       // gauname rezultata milisekundemis. Suzinom kiek milisekundziu bus nauju metu datoje. 
       const newYearMilliseconds = newYearObject.getTime();
   
       // einamasis laikas yyyy-mm-dd hh:mm:ss
       // currentTime / 1000 / 60 / 60/ 24 / 365.25
       //? gauname dabartini laika milisekundemis. Jis apskaiciuojamas nuo 1970m datos. Gauta laika ppaversti i metus ir prideti prie 1970,gauname dabartine data 
       const currentTimeMilliseconds = date.getTime();
       
       // suskaiciuojame laiko skirtuma tarp datos nuo kurios darom countdowna iki dabartines datos
       const timeLeft = newYearMilliseconds - currentTimeMilliseconds;
   
       // surandame kiek liko sekundziu paimdami ms is timeLeft ir padalinam is 1000
       let secondsLeft = timeLeft / 1000;
   
   
       // norint ji apskaiciuoti reikia nuo reikiamos datos atimti currentTime (1970) 
       // is skirtumo apskaiciuojame likusias dienas, valandas, minutes ir sekundes
       const days = Math.floor(secondsLeft / 60 / 60 / 24);
   
       // atima nepanaudotas sekundes 
       secondsLeft -= days * 60 * 60 * 24;
       // gauna nepanaudotas sekundes kurias isdalina valandoms ?? what.
       // const hours = Math.floor((secondsLeft - days * 60 * 60 * 24) / 60 / 60);
       const hours = Math.floor(secondsLeft / 60 / 60)
       secondsLeft -= hours * 60 * 60;
   
       const minutes = Math.floor(secondsLeft / 60);
   
       const seconds = Math.floor(secondsLeft - minutes * 60);
       
       return {
        days: days < 10 ? '0' + days : days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds,
    }
}

export { countTimeDiff }