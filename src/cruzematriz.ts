function cruzarMatrices(A: number[][], B: number[][]): string[][] {
    // Verificar que las matrices tengan el mismo tamaño
    if (A.length === 0 || B.length === 0 || A.length !== B.length || A[0].length !== B[0].length) {
        throw new Error("Las matrices deben tener el mismo tamaño.");
    }

    // Inicializar la matriz resultado con el mismo tamaño que A y B
    const filas = A.length;
    const columnas = A[0].length;
    const resultado: string[][] = Array.from({ length: filas }, () => Array(columnas).fill('-'));

    // Iterar sobre las matrices
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            const a = A[i][j];
            const b = B[i][j];

            // Evaluar y asignar el valor en la matriz resultante
            if (a % 2 !== 0 && b % 2 === 0) {
                resultado[i][j] = 'X';
            } else if ((a % 2 === 0 && b % 2 === 0) || (a % 2 !== 0 && b % 2 !== 0)) {
                resultado[i][j] = 'O';
            } else {
                resultado[i][j] = '-';
            }
        }
    }

    return resultado;
}

// Ejemplo de uso
const A = [[1, 2], [3, 4]];
const B = [[2, 3], [4, 5]];
console.log(cruzarMatrices(A, B)); // Devuelve [['X', '-'], ['-', 'O']]
