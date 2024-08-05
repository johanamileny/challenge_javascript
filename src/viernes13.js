function tieneViernes13(mes, anio) {
    var fecha = new Date(anio, mes - 1, 13); // Crear un objeto Date para el 13 del mes dado
    return fecha.getDay() === 5; // 5 corresponde a viernes
}
// Utiliza un nombre único para la variable en el ámbito adecuado
var mes = 3; // Marzo
var anio = 2024;
var resultadoVerificacion = tieneViernes13(mes, anio);
console.log("\u00BFHay un viernes 13 en ".concat(mes, "/").concat(anio, "? ").concat(resultadoVerificacion));
