
function calcularPropina(totalCuenta: number, porcentajePropina: number): number {
    return totalCuenta * (porcentajePropina / 100);
}

function calcularTotal(totalCuenta: number, propina: number): number {
    return totalCuenta + propina;
}

function dividirCuenta(total: number, numeroPersonas: number): number {
    return total / numeroPersonas;
}

function calculadoraDePropinas(totalCuenta: number, nivelServicio: string, numeroPersonas: number): void {
    if (totalCuenta <= 0) {
        console.log("El total de la cuenta debe ser un valor positivo.");
        return;
    }

    let porcentajeDePropina: number;
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


    const propina: number = calcularPropina(totalCuenta, porcentajeDePropina);

    const totalAPagar: number = calcularTotal(totalCuenta, propina);

    const totalPorPersona: number = dividirCuenta(totalAPagar, numeroPersonas);

  
    console.log(`Nivel de servicio: ${nivelServicio}`);
    console.log(`El total de la cuenta es $${totalCuenta.toFixed(2)}.`);
    console.log(`La propina para una cuenta de $${totalCuenta.toFixed(2)} con un ${porcentajeDePropina}% de propina es $${propina.toFixed(2)}.`);
    console.log(`El total a pagar es $${totalAPagar.toFixed(2)}.`);
    console.log(`Dividido entre ${numeroPersonas} persona(s), cada uno debe pagar $${totalPorPersona.toFixed(2)}.`);
}

const totalDeLaCuenta: number = 100; 
const nivelDeServicio: string = "Excelente"; // Nivel de servicio puede ser 'excelente', 'bueno', 'regular', 'malo'
const numeroDePersonas: number = 4; // Número de personas para dividir la cuenta

calculadoraDePropinas(totalDeLaCuenta, nivelDeServicio, numeroDePersonas);
