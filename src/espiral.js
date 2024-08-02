function dibujarEspiralSimple(tamano) {
    if (tamano < 1) {
        console.log('El tamaño debe ser al menos 1.');
        return;
    }
    var espiral = Array.from({ length: tamano }, function () { return Array(tamano).fill(' '); });
    var simbolos = ['═', '║', '╗', '╔', '╝', '╚'];
    var simboloIndex = 0;
    var ponerSimbolo = function (x, y, simbolo) {
        if (x >= 0 && x < tamano && y >= 0 && y < tamano) {
            espiral[x][y] = simbolo;
        }
    };
    var x = 0, y = 0;
    var direccion = 0; // 0 = derecha, 1 = abajo, 2 = izquierda, 3 = arriba
    for (var i = 0; i < tamano * tamano; i++) {
        ponerSimbolo(x, y, simbolos[simboloIndex]);
        switch (direccion) {
            case 0:
                y++;
                break;
            case 1:
                x++;
                break;
            case 2:
                y--;
                break;
            case 3:
                x--;
                break;
        }
        if (y >= tamano || y < 0 || x >= tamano || x < 0 || espiral[x][y] !== ' ') {
            switch (direccion) {
                case 0:
                    y--;
                    break;
                case 1:
                    x--;
                    break;
                case 2:
                    y++;
                    break;
                case 3:
                    x++;
                    break;
            }
            direccion = (direccion + 1) % 4;
            switch (direccion) {
                case 0:
                    y++;
                    break;
                case 1:
                    x++;
                    break;
                case 2:
                    y--;
                    break;
                case 3:
                    x--;
                    break;
            }
        }
        simboloIndex = (simboloIndex + 1) % simbolos.length;
    }
    for (var _i = 0, espiral_1 = espiral; _i < espiral_1.length; _i++) {
        var fila = espiral_1[_i];
        console.log(fila.join(''));
    }
}
// Ejemplo de uso
dibujarEspiralSimple(5);
