function dibujarEspiralSimple(tamano: number): void {
    if (tamano < 1) {
        console.log('El tamaño debe ser al menos 1.');
        return;
    }

    const espiral: string[][] = Array.from({ length: tamano }, () => Array(tamano).fill(' '));

    const simbolos = ['═', '║', '╗', '╔', '╝', '╚'];
    let simboloIndex = 0;

    const ponerSimbolo = (x: number, y: number, simbolo: string) => {
        if (x >= 0 && x < tamano && y >= 0 && y < tamano) {
            espiral[x][y] = simbolo;
        }
    };

    let x = 0, y = 0;
    let direccion = 0; // 0 = derecha, 1 = abajo, 2 = izquierda, 3 = arriba

    for (let i = 0; i < tamano * tamano; i++) {
        ponerSimbolo(x, y, simbolos[simboloIndex]);

        switch (direccion) {
            case 0: y++; break;
            case 1: x++; break;
            case 2: y--; break;
            case 3: x--; break;
        }

        if (y >= tamano || y < 0 || x >= tamano || x < 0 || espiral[x][y] !== ' ') {
            switch (direccion) {
                case 0: y--; break;
                case 1: x--; break;
                case 2: y++; break;
                case 3: x++; break;
            }
            direccion = (direccion + 1) % 4;
            switch (direccion) {
                case 0: y++; break;
                case 1: x++; break;
                case 2: y--; break;
                case 3: x--; break;
            }
        }

        simboloIndex = (simboloIndex + 1) % simbolos.length;
    }

    for (const fila of espiral) {
        console.log(fila.join(''));
    }
}

// Ejemplo de uso
dibujarEspiralSimple(5);
