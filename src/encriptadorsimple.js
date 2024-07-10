function encriptarMensaje(mensaje) {
    var mensajeEncriptado = '';
    for (var i = 0; i < mensaje.length; i++) {
        var caracter = mensaje[i];
        if (/[a-zA-Z]/.test(caracter)) {
            var codigo = caracter.charCodeAt(0);
            var esMayuscula = codigo >= 65 && codigo <= 90;
            var esMinuscula = codigo >= 97 && codigo <= 122;
            if (esMayuscula || esMinuscula) {
                var nuevoCodigo = codigo + 1;
                if ((esMayuscula && nuevoCodigo > 90) || (esMinuscula && nuevoCodigo > 122)) {
                    nuevoCodigo -= 26;
                }
                caracter = String.fromCharCode(nuevoCodigo);
            }
        }
        mensajeEncriptado += caracter;
    }
    return mensajeEncriptado;
}
// Cita de Mahatma Gandhi
var cita = "La grandeza de una nación y su progreso moral pueden ser juzgados por la manera en que trata a sus animales.";
var citaEncriptada = encriptarMensaje(cita);
console.log("Cita original: ".concat(cita));
console.log("Cita encriptada: ".concat(citaEncriptada));
