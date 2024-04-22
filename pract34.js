function genera_rfc() {
    var nombre = document.getElementById('nombre').value;
    var ap = document.getElementById('ap').value;
    var am = document.getElementById('am').value;
    var anio = document.getElementById('anio').value;
    var mes = document.getElementById('mes').value;
    var dia = document.getElementById('dia').value;

    var rfc = ap.substr(0, 2).toUpperCase() + am.substr(0, 1).toUpperCase() + nombre.substr(0, 1).toUpperCase();
    rfc += anio.substr(2, 2);
    if (mes.length == 1) {
        rfc += "0" + mes;
    } else {
        rfc += mes;
    }
    if (dia.length == 1) {
        rfc += "0" + dia;
    } else {
        rfc += dia;
    }

    document.getElementById('resultado').value = rfc;
}
