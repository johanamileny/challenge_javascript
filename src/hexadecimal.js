function decimalAOctal(decimal) {
    if (decimal === 0)
        return '0';
    var octal = '';
    while (decimal > 0) {
        octal = (decimal % 8) + octal;
        decimal = Math.floor(decimal / 8);
    }
    return octal;
}
function decimalAHexadecimal(decimal) {
    if (decimal === 0)
        return '0';
    var hexDigits = '0123456789ABCDEF';
    var hexadecimal = '';
    while (decimal > 0) {
        hexadecimal = hexDigits[decimal % 16] + hexadecimal;
        decimal = Math.floor(decimal / 16);
    }
    return hexadecimal;
}
function convertirNumero(decimal) {
    return {
        octal: decimalAOctal(decimal),
        hexadecimal: decimalAHexadecimal(decimal)
    };
}
// Ejemplo de uso
var decimal = 255;
var resultado = convertirNumero(decimal);
console.log("Octal: ".concat(resultado.octal)); // Octal: 377
console.log("Hexadecimal: ".concat(resultado.hexadecimal)); // Hexadecimal: FF
