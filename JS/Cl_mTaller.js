export default class Cl_mTaller {
    constructor() {
        this.cntEst = 0;
        this.cntProf = 0;
        this.cntInv = 0;
        this.acMontPago = 0;
    }

    procesarParticipante(p) {
        if (p.tipo === 1) {
            this.cntEst++;
        } else if (p.tipo === 2) {
            this.cntProf++;
        } else if (p.tipo === 3) {
            this.cntInv++;
        }

        this.acMontPago += p.calcMontPago();
    }

    devolverTipoFrec() {
        if ((this.cntEst === this.cntProf) && (this.cntEst === this.cntInv)) {
            return "Por iguales: Estudiantes, Profesores e Invitados";
        } else if ((this.cntEst === this.cntProf) && (this.cntEst > this.cntInv)) {
            return "Estudiantes y Profesores";
        } else if ((this.cntEst === this.cntInv) && (this.cntEst > this.cntProf)) {
            return "Estudiantes e Invitados";
        } else if ((this.cntProf === this.cntInv) && (this.cntProf > this.cntEst)) {
            return "Profesores e Invitados";
        } else if ((this.cntEst > this.cntProf) && (this.cntEst > this.cntInv)) {
            return "Estudiantes";
        } else if ((this.cntProf > this.cntEst) && (this.cntProf > this.cntInv)) {
            return "Profesores";
        } else {
            return "Invitados";
        }
    }

    devolverMontTotal() {
        return this.acMontPago;
    }

    calcImpuesto() {
        return this.acMontPago * 0.3;
    }
}