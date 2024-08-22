export default class Cl_vTaller {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.lblTipoFrecuente = document.getElementById("mainForm_lblTipoFrecuente");
        this.lblMontTotal = document.getElementById("mainForm_lblMontoTotal");
        this.lblImpuesto = document.getElementById("mainForm_lblImpuesto");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.btAgregar.onclick = () => controlador.mostrarVistaParticipante();
    }

    mostrar() {
        this.vista.hidden = false;
    }

    ocultar() {
        this.vista.hidden = true;
    }

    reportarParticipante({
        cedula,
        tipo,
        edad,
        montPago,
        tipoFrec,
        montTotal,
        impuesto
    }) {
        this.tabla.innerHTML += `
        <tr>
            <td>${cedula}</td>
            <td>${tipo}</td>
            <td>${edad}</td>
            <td>${montPago}</td>
        </tr>
        `;
        this.lblTipoFrecuente.innerHTML = tipoFrec;
        this.lblMontTotal.innerHTML = montTotal;
        this.lblImpuesto.innerHTML = impuesto;
    }
}