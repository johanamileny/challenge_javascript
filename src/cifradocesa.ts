function cifradoCesar
  (mensaje: string, desplazamiento: number): 
  string {let mensajeCifrado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i];

        if (/[a-zA-Z]/.test(caracter)) {
            let codigo = caracter.charCodeAt(0);
            let base = codigo >= 65 && codigo <= 90 ? 65 : 97;

            let nuevoCodigo = ((codigo - base + desplazamiento) % 26) + base;

            caracter = String.fromCharCode(nuevoCodigo);
        }

        mensajeCifrado += caracter;
    }

    return mensajeCifrado;
}


const mensajes = [
    "Hola, mundo!",
    "Este es un mensaje secreto.",
    "Programación es divertida.",
    "Cifrado César en TypeScript.",
    "Aprendiendo Typescrip!"
];

// Iterar sobre cada mensaje y generar un cifrado aleatorio
for (let mensaje of mensajes) {
    const desplazamiento = Math.floor(Math.random() * 10) + 1; 
    const mensajeCifrado = cifradoCesar(mensaje, desplazamiento);

    console.log(`Mensaje original: ${mensaje}`);
    console.log(`Mensaje cifrado (desplazamiento ${desplazamiento}): ${mensajeCifrado}`);
    console.log("---------------------------------------------");
}
