function cifradoCesar(mensaje, desplazamiento) {
    var mensajeCifrado = '';
    for (var i = 0; i < mensaje.length; i++) {
        var caracter = mensaje[i];
        if (/[a-zA-Z]/.test(caracter)) {
            var codigo = caracter.charCodeAt(0);
            var base = codigo >= 65 && codigo <= 90 ? 65 : 97;
            var nuevoCodigo = ((codigo - base + desplazamiento) % 26) + base;
            caracter = String.fromCharCode(nuevoCodigo);
        }
        mensajeCifrado += caracter;
    }
    return mensajeCifrado;
}
var mensajes = [
    "Hola, mundo!",
    "Este es un mensaje secreto.",
    "Programación es divertida.",
    "Cifrado César en TypeScript.",
    "Aprendiendo Typescrip!"
];
// Iterar sobre cada mensaje y generar un cifrado aleatorio
for (var _i = 0, mensajes_1 = mensajes; _i < mensajes_1.length; _i++) {
    var mensaje = mensajes_1[_i];
    var desplazamiento = Math.floor(Math.random() * 10) + 1;
    var mensajeCifrado = cifradoCesar(mensaje, desplazamiento);
    console.log("Mensaje original: ".concat(mensaje));
    console.log("Mensaje cifrado (desplazamiento ".concat(desplazamiento, "): ").concat(mensajeCifrado));
    console.log("---------------------------------------------");
}
