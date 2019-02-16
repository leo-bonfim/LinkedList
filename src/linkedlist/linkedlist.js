const Celula = require('./celula');

module.exports = class LinkedList {
    
    constructor() {
        this._contador = 0;
        this.inicio = null;
        this.fim = null;
    }

    add(elemento) {

        const auxiliar = new Celula(elemento);

        if(this.inicio == null) {
            this.inicio = auxiliar;
            this.fim = this.inicio;
        }
        else {
            
             let atual = this.fim;

             atual.proximo = auxiliar;
             this.fim = atual.proximo;

        }

        this._contador = ++this._contador;

    }

    getById(num) {
        
        let atual = this.inicio;

        for( let i = 0; i < num; i++ ) {

            if(atual.proximo)
                atual = atual.proximo;
            else
                throw 'Index Out of Bounds';        

        }

        return atual.elemento;

    }

    size() {
        return this._contador;
    }

}