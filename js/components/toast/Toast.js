class Toast {
    /**
     * Konstruktorius inicijuojantis pranesima rodanti elementa
     * @constructor
     */
    constructor() {
        //? nustatom kur norim istatyt elementa
        this.selector = 'body';

        //? paimam sita selektoriu
        this.renderIntoParentDOM = document.querySelector(this.selector); 

        //! null kad nemestu klaidos, o paskuj sitos reiksmes bus pakeistos
        //? reprezentuoja naujai sugeneruota elementa, pakeisime veliau
        this.DOM = null; 

        //? elementas kur atvaizduosime pranesima, pakeisime veliau
        this.textDOM = null; 

        //? elementas skirtas uzdaryti toasta
        this.closeDOM = null; 

        //? laikrodis, reguliuojantis kada uzdaryti pranesima
        this.closeTimer = null; 
    }
    
    //? uzdeda klase, parodo toasta
       /**
     * 
     * @param {string} type Zinutes tipas. Vieninteliai galimi variantai: `success | error`.
     * @param {string} message Tekstas, kuris turi buti atvaizduotas pranesime.
     */
    show(type, message) {
        this.DOM.classList.add('visible');
        this.textDOM.innerText = message;

        if (type === 'success') {
            this.DOM.classList.remove('error');
        }
        if (type === 'error') {
            this.DOM.classList.add('error');
        }

        //? paslepsim auatomatiskai jei niekas nepaspaus
        this.closeTimer = setTimeout(() => {
            this.hide();
        }, 10000)
    }

    //? nuima klase , paslepia toasta
    /**
     * Metodas paslepiantis pranesimo elementa
     */
    hide(){
        this.DOM.classList.remove('visible')

        //? kai uzdarysim , timeris sustos ir nebesisuks
        clearTimeout(this.closeTimer);
    }
    
    //? sukuria elemento Html
     /**
     * Metodas sugeneruojantis pranesimo elementa
     */
    render() {
        const HTML = `<div class="toast">
                        <i class="fa fa-check"></i>
                        <i class="fa fa-shield"></i>
                        <p>Your message here...</p>
                        <i class="fa fa-times"></i>
                    </div>`;
        //? insertAdjacentHTML nekeicia esamo turinio. insertHTML pakeicia - !NENAUDOTI!
        this.renderIntoParentDOM.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.renderIntoParentDOM.querySelector('.toast');

        //? kur irasom konkrecias zinutes
        this.textDOM = this.DOM.querySelector('p');

        //? surandam kur yra closeDOM elementas
        this.closeDOM = this.DOM.querySelector('.fa-times');

        //? paspausim ir ka darysim?
        this.closeDOM.addEventListener('click', () => {
            //? paslepsim issivkiete Toast classes hide() moduli
            this.hide()
        });
    }
}

export { Toast }