export default class Cl_mParticipante {
    constructor({ cedula, tipo, edad }) {
        this.cedula = cedula;
        this.tipo = +tipo;
        this.edad = +edad;
    }

    set cedula(c) {
        this._cedula = c;
    }

    set tipo(t) {
        this._tipo = +t;
    }

    set edad(e) {
        this._edad = +e;
    }

    get cedula() {
        return this._cedula;
    }

    get tipo() {
        return this._tipo;
    }

    get edad() {
        return this._edad;
    }

    calcMontPago() {
        if (this.tipo === 1)
            return 10;
        else if (this.tipo === 2)
            return 15;
        else if (this.tipo === 3)
            return 20;
        else
            return "Tipo Inválido";
    }
}