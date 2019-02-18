const Celula = require('./celula');

module.exports = class LinkedList {
    
    constructor() {
        this._contador = 0;
        this._inicio = null;
        this._fim = null;
    }

    add(elemento) {

        const novo = new Celula(elemento);

        if(elemento) {

            if(this._inicio == null) {
                this._inicio = novo;
                this._fim = this._inicio;
            }
            else {
                
                let atual = this._fim;
    
                atual.proximo = novo;
    
                let aux = atual;
                atual = atual.proximo;
                atual.anterior = aux;
    
                this._fim = atual;
    
            }

        }

        this._contador = ++this._contador;

    }

    get(index) {

        let atual = null;
        
        if(index < this._contador) {

            const meio = Math.floor(this._contador / 2);

            if(index < meio) {

                atual = this._inicio;

                for( let i = 0; i < index; i++ ) {
                    atual = atual.proximo;  
                }

            }
            else {

                atual = this._fim;

                for( let i = this._contador-1; i > index; i-- ) {
                    atual = atual.anterior;
                }

            }

        }
        else {
            throw new RangeError('index out of bounds');
        }
        
        return atual.elemento;

    }

    size() {
        return this._contador;
    }

    set(elemento, index) {

        if(elemento) {

            const novo = new Celula(elemento);

            if(index <= (this._contador)) {

                const meio = Math.floor(this._contador / 2);

                if(index > meio) {

                    if(index == this._contador - 1) {

                        let aux = this._fim;
                        let atual = novo;

                        atual.proximo = aux;
                        atual.anterior = aux.anterior;

                        aux.anterior.proximo = atual;
                        aux.anterior = atual;
                        
                    }
                    else {

                        let atual = this._fim;
                        let proximo = null;

                        for(let i = this._contador; i > index; i--) {
                            proximo = atual;

                            atual = atual.anterior;
                        }

                        let aux = atual;
                        atual = novo;

                        atual.proximo = proximo;
                        proximo.anterior = atual;

                        atual.anterior = aux;
                        aux.proximo = atual;

                    }

                }
                else {

                    if(index == 0) {

                        let aux = this._inicio;
                        let atual = novo;

                        this._inicio = atual;
                        atual.proximo = aux;
                        aux.anterior = atual;
                        
                    }
                    else {

                        let atual = this._inicio;
                        let anterior = null;

                        for(let i = 0; i < index; i++) {

                            anterior = atual;

                            atual = atual.proximo;

                        }

                        let aux = atual;
                        atual = novo;

                        atual.anterior = anterior;
                        anterior.proximo = atual;

                        atual.proximo = aux;
                        aux.anterior = atual;

                    }

                }
            }
            else
                throw new RangeError('index out of bounds');

        }
        this._contador = ++this._contador; 
    }

}