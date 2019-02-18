module.exports = class Celula {

    constructor(elemento) {
        this._elemento = elemento;
    }

    set proximo(proximo) {
        this._proximo = proximo;
    }

    get proximo() {
        return this._proximo;
    }

    set anterior(anterior) {
        this._anterior = anterior;
    }

    get anterior() {
        return this._anterior;
    }

    set elemento(elemento) {
        this._elemento = elemento;
    }

    get elemento() {
        return this._elemento;
    }

}