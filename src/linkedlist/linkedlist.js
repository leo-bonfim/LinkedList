const Celula = require('./celula');

module.exports = class LinkedList {
    
    constructor() {
        this._contador = 0;
        this._inicio = null;
        this._fim = null;
    }

    add(elemento, index) {

        const novo = new Celula(elemento);

        if(elemento && index != undefined && index + 1 != this._contador + 1)
            this._inserirNoIndex(novo, index)
        else if(elemento) {
            this._inserirNoFinal(novo);
        }

        this._contador = ++this._contador;

    }

    getById(num) {
        
        let atual = this._inicio;

        for( let i = 0; i < num; i++ ) {

            if(atual.proximo)
                atual = atual.proximo;
            else
                throw new Error('Index Out of Bounds.');  

        }

        return atual.elemento;

    }

    size() {
        return this._contador;
    }

    _inserirNoFinal(novo) {

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

    _inserirNoIndex(novo, index) {

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
            throw new Error('Index Out of Bounds.');  

    }

}