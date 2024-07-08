class Juego {
    numeroSecreto: number;
    intentosM: number;

    constructor() {
        this.numeroSecreto = Math.floor(Math.random() * 10) + 1;
        this.intentosM = 3;
    }

    jugar(suposiciones: number[]): void {
        let intentos = 0;
        let adivinado = false;

        while (intentos < this.intentosM && !adivinado) {
            const suposicion = suposiciones[intentos];
            intentos++;
            if (suposicion === this.numeroSecreto) {
                console.log(`¡Felicidades! Adivinaste el número en ${intentos} intento(s).`);
                adivinado = true;
            } else if (suposicion > this.numeroSecreto) {
                console.log("Tu suposición es demasiado alta.");
            } else {
                console.log("Tu suposición es demasiado baja.");
            }

            if (!adivinado && intentos < this.intentosM) {
                console.log(`Intento ${intentos} fallido. Intenta de nuevo.`);
            }
        }

        if (!adivinado) {
            console.log(`Lo siento, has perdido. El número era ${this.numeroSecreto}.`);
        }
    }
}

const juego = new Juego();
juego.jugar([3, 5, 8]); // Ejemplo de lista de suposiciones
