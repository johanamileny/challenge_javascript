function excelColumnToNumber(column) {
    var result = 0;
    var base = 26; // Base del sistema de numeración de columnas en Excel
    // Recorre cada carácter de la columna de derecha a izquierda
    for (var i = 0; i < column.length; i++) {
        // Convierte el carácter a un número (A = 1, B = 2, ..., Z = 26)
        var charValue = column.charCodeAt(column.length - 1 - i) - 'A'.charCodeAt(0) + 1;
        result += charValue * Math.pow(base, i);
    }
    return result;
}
// Ejemplos de uso
console.log(excelColumnToNumber("A")); // 1
console.log(excelColumnToNumber("Z")); // 26
console.log(excelColumnToNumber("AA")); // 27
console.log(excelColumnToNumber("CA")); // 79
