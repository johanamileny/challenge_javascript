function cruzarMatrices(A, B) {
    // Verificar que las matrices tengan el mismo tamaño
    if (A.length === 0 || B.length === 0 || A.length !== B.length || A[0].length !== B[0].length) {
        throw new Error("Las matrices deben tener el mismo tamaño.");
    }
    // Inicializar la matriz resultado con el mismo tamaño que A y B
    var filas = A.length;
    var columnas = A[0].length;
    var resultado = Array.from({ length: filas }, function () { return Array(columnas).fill('-'); });
    // Iterar sobre las matrices
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            var a = A[i][j];
            var b = B[i][j];
            // Evaluar y asignar el valor en la matriz resultante
            if (a % 2 !== 0 && b % 2 === 0) {
                resultado[i][j] = 'X';
            }
            else if ((a % 2 === 0 && b % 2 === 0) || (a % 2 !== 0 && b % 2 !== 0)) {
                resultado[i][j] = 'O';
            }
            else {
                resultado[i][j] = '-';
            }
        }
    }
    return resultado;
}
// Ejemplo de uso
var A = [[1, 2], [3, 4]];
var B = [[2, 3], [4, 5]];
console.log(cruzarMatrices(A, B)); // Devuelve [['X', '-'], ['-', 'O']]
