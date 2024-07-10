function validarTarjetaCredito(numero: string): boolean {
    const digitos = numero.split('').map(Number).reverse();

    let suma = 0;

    for (let i = 0; i < digitos.length; i++) {
        let digito = digitos[i];

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

const numerosDePrueba = [
    "4556737586899855", 
    "4929804463622137", 
    "6011123456789012" 
];

numerosDePrueba.forEach(numero => {
    const esValida = validarTarjetaCredito(numero);
    console.log(`Tarjeta ${numero} es ${esValida ? 'válida' : 'No válida'}`);
});
