// Definición de la función Fibonacci que devuelve un array de números
function fibonacci(n: number): number[] {
    // Creamos un array vacío donde almacenaremos la secuencia Fibonacci
    let sequence: number[] = [];

    // Casos base de la serie Fibonacci
    // Si n es mayor o igual a 1, añadimos el primer número de Fibonacci (0)
    if (n >= 1) {
        sequence.push(0);
    }
    // Si n es mayor o igual a 2, añadimos el segundo número de Fibonacci (1)
    if (n >= 2) {
        sequence.push(1);
    }

    // Generación de la secuencia Fibonacci
    // Comenzamos desde el tercer número hasta el enésimo número (n)
    for (let i = 2; i < n; i++) {
        // Cada número de Fibonacci se calcula sumando los dos números anteriores
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    // Devolvemos el array completo con la secuencia Fibonacci
    return sequence;
}

// Ejemplo de uso de la función fibonacci
const n = 10; // Obtener los primeros 10 números de Fibonacci
const fibSequence = fibonacci(n); // Llamamos a la función fibonacci con n = 10
// Imprimimos en la consola los resultados
console.log(`Los primeros ${n} números de Fibonacci son: ${fibSequence.join(', ')}`);
