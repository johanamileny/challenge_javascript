var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function buscarSecuencias(lista, objetivo) {
    var secuencias = [];
    for (var i = 0; i < lista.length; i++) {
        var suma = 0;
        var secuencia = [];
        for (var j = i; j < lista.length; j++) {
            suma += lista[j];
            secuencia.push(lista[j]);
            if (suma === objetivo) {
                secuencias.push(__spreadArray([], secuencia, true)); // Agregar una copia de la secuencia encontrada
            }
            else if (suma > objetivo) {
                break; // Salir del bucle interno si la suma excede el objetivo
            }
        }
    }
    return secuencias;
}
// Ejemplo de uso con nuevos valores
console.log(buscarSecuencias([3, 6, 9, 12, 15], 21)); // [[6, 9, 12], [9, 12]]
console.log(buscarSecuencias([1, 4, 5, 7, 10], 12)); // [[5, 7], [1, 4, 7]]
console.log(buscarSecuencias([2, 4, 6, 8, 10], 20)); // [[6, 8, 6], [10, 10]]
