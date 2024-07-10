function calcularPropina(totalCuenta, porcentajePropina) {
    return totalCuenta * (porcentajePropina / 100);
}
function calcularTotal(totalCuenta, propina) {
    return totalCuenta + propina;
}
function dividirCuenta(total, numeroPersonas) {
    return total / numeroPersonas;
}
function calculadoraDePropinas(totalCuenta, nivelServicio, numeroPersonas) {
    if (totalCuenta <= 0) {
        console.log("El total de la cuenta debe ser un valor positivo.");
        return;
    }
    var porcentajeDePropina;
    switch (nivelServicio.toLowerCase()) {
        case 'excelente':
            porcentajeDePropina = 20;
            break;
        case 'bueno':
            porcentajeDePropina = 15;
            break;
        case 'regular':
            porcentajeDePropina = 10;
            break;
        case 'malo':
            porcentajeDePropina = 5;
            break;
        default:
            porcentajeDePropina = 15;
            console.log("Nivel de servicio desconocido, se aplicará el 15% de propina por defecto.");
    }
    var propina = calcularPropina(totalCuenta, porcentajeDePropina);
    var totalAPagar = calcularTotal(totalCuenta, propina);
    var totalPorPersona = dividirCuenta(totalAPagar, numeroPersonas);
    console.log("Nivel de servicio: ".concat(nivelServicio));
    console.log("El total de la cuenta es $".concat(totalCuenta.toFixed(2), "."));
    console.log("La propina para una cuenta de $".concat(totalCuenta.toFixed(2), " con un ").concat(porcentajeDePropina, "% de propina es $").concat(propina.toFixed(2), "."));
    console.log("El total a pagar es $".concat(totalAPagar.toFixed(2), "."));
    console.log("Dividido entre ".concat(numeroPersonas, " persona(s), cada uno debe pagar $").concat(totalPorPersona.toFixed(2), "."));
}
var totalDeLaCuenta = 100;
var nivelDeServicio = "Excelente"; // Nivel de servicio puede ser 'excelente', 'bueno', 'regular', 'malo'
var numeroDePersonas = 4; // Número de personas para dividir la cuenta
calculadoraDePropinas(totalDeLaCuenta, nivelDeServicio, numeroDePersonas);
