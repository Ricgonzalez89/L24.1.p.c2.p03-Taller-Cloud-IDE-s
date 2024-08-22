export default class Cl_vParticipante {
    constructor(controlador) {
        this.vista = document.getElementById("participanteForm");
        this.inCedula = document.getElementById("participanteForm_inCedula");
        this.inTipo = document.getElementById("participanteForm_inTipo");
        this.inEdad = document.getElementById("participanteForm_inEdad");
        this.btAceptar = document.getElementById("participanteForm_btAceptar");
        this.btAceptar.onclick = () =>
            controlador.agregarParticipante({
                cedula: this.inCedula.value,
                tipo: this.inTipo.value,
                edad: this.inEdad.value
            });
        this.ocultar();
    }

    mostrar() {
        this.vista.hidden = false;
    }

    ocultar() {
        this.vista.hidden = true;
    }
}