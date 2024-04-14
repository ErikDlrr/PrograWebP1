document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnMulti').addEventListener('click', multi);
});

function multi() {
    var num = prompt('Ingresa un numero (1-10)', '');
    num = parseInt(num);
    if (!isNaN(num) && num >= 1 && num <= 10) {
        var tabla = '';
        for (var x = 1; x <= 10; x++) {
            tabla += num + " x " + x + " = " + (num * x) + "<br>";
        }
        document.getElementById('tablaMultiplicar').innerHTML = tabla;
    } else {
        alert('Por favor, ingresa un número válido entre 1 y 10.');
    }
}
