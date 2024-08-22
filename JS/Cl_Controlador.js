import Cl_mParticipante from "./Cl_mParticipante.js";
import Cl_mTaller from "./Cl_mTaller.js";
import Cl_vParticipante from "./Cl_vParticipante.js";
import Cl_vTaller from "./Cl_vTaller.js";

export default class Cl_controlador {
    constructor() {
        this.mTaller = new Cl_mTaller();
        this.vTaller = new Cl_vTaller(this);
        this.vParticipante = new Cl_vParticipante(this);
    }

    mostrarVistaParticipante() {
        this.vTaller.ocultar();
        this.vParticipante.mostrar();
    }

    mostrarVistaTaller() {
        this.vTaller.mostrar();
        this.vParticipante.ocultar();
    }

    agregarParticipante({ cedula, tipo, edad }) {
        let part = new Cl_mParticipante({ cedula, tipo, edad });
        this.mTaller.procesarParticipante(part);
        this.vTaller.reportarParticipante({
            cedula: part.cedula,
            tipo: part.tipo,
            edad: part.edad,
            montPago: part.calcMontPago(),
            tipoFrec: this.mTaller.devolverTipoFrec(),
            montTotal: this.mTaller.devolverMontTotal(),
            impuesto: this.mTaller.calcImpuesto()
        })
        this.mostrarVistaTaller();
    }
}