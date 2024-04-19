document.getElementById('formu').addEventListener('submit', function(event) {
    event.preventDefault();
    var cadena = document.getElementById('cadena').value;
    var resultado = '';
    if (/[a-z]/.test(cadena) && /[A-Z]/.test(cadena)) {
        resultado = 'La cadena "' + cadena + '" contiene mayúsculas y minúsculas.';
    } else if (/[a-z]/.test(cadena)) {
        resultado = 'La cadena "' + cadena + '" contiene solo minúsculas.';
    } else if (/[A-Z]/.test(cadena)) {
        resultado = 'La cadena "' + cadena + '" contiene solo mayúsculas.';
    } else {
        resultado = 'La cadena no contiene letras.';
    }
    document.getElementById('parrafo').innerText = resultado;
});