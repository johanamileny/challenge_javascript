function tieneViernes13(mes: number, anio: number): boolean {
    const fecha = new Date(anio, mes - 1, 13); // Crear un objeto Date para el 13 del mes dado
    return fecha.getDay() === 5; // 5 corresponde a viernes
}

// Utiliza un nombre único para la variable en el ámbito adecuado
const mes = 3;  // Marzo
const anio = 2024;
const resultadoVerificacion = tieneViernes13(mes, anio);
console.log(`¿Hay un viernes 13 en ${mes}/${anio}? ${resultadoVerificacion}`);
