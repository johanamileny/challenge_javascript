function validarTarjetaCredito(numero) {
    var digitos = numero.split('').map(Number).reverse();
    var suma = 0;
    for (var i = 0; i < digitos.length; i++) {
        var digito = digitos[i];
        // Paso 1 y 2 del algoritmo de Luhn: duplicar cada segundo dígito
        if (i % 2 === 1) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9; // Si el resultado tiene dos dígitos, sumarlos
            }
        }
        suma += digito;
    }
    return suma % 10 === 0;
}
var numerosDePrueba = [
    "4556737586899855",
    "4929804463622137",
    "6011123456789012"
];
numerosDePrueba.forEach(function (numero) {
    var esValida = validarTarjetaCredito(numero);
    console.log("Tarjeta ".concat(numero, " es ").concat(esValida ? 'válida' : 'No válida'));
});
