function encriptarMensaje(mensaje: string): string {
    let mensajeEncriptado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let caracter = mensaje[i];

        if (/[a-zA-Z]/.test(caracter)) {
            let codigo = caracter.charCodeAt(0);
            let esMayuscula = codigo >= 65 && codigo <= 90;
            let esMinuscula = codigo >= 97 && codigo <= 122;

            if (esMayuscula || esMinuscula) {
                let nuevoCodigo = codigo + 1;
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
const cita = "La grandeza de una nación y su progreso moral pueden ser juzgados por la manera en que trata a sus animales.";
const citaEncriptada = encriptarMensaje(cita);

console.log(`Cita original: ${cita}`);
console.log(`Cita encriptada: ${citaEncriptada}`);
