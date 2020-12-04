class Toast {
    constructor() {
        //? nustatom kur norim istatyt elementa
        this.selector = 'body';

        //? paimam sita selektoriu
        this.renderIntoParentDOM = document.querySelector(this.selector); 

        //! null kad nemestu klaidos, o paskuj sitos reiksmes bus pakeistos
        //? reprezentuoja naujai sugeneruota elementa
        this.DOM = null; 

        //? elementas kur atvaizduosime pranesima
        this.textDOM = null; 
    }
    
    //? uzdeda klase, parodo toasta
    show(type, message) {
        this.DOM.classList.add('visible');
        this.textDOM.innerText = message;

        if (type === 'success') {
            this.DOM.classList.remove('error');
        }
        if (type === 'error') {
            this.DOM.classList.add('error');
        }
    }

    //? nuima klase , paslepia toasta
    hide(){
        this.DOM.classList.remove('visible')
    }
    
    //? sukuria elemento Html
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
        this.textDOM = this.DOM.querySelector('p');
    }
}

export { Toast }