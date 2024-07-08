var Juego = /** @class */ (function () {
    function Juego() {
        this.numeroSecreto = Math.floor(Math.random() * 10) + 1;
        this.intentosM = 3;
    }
    Juego.prototype.jugar = function (suposiciones) {
        var intentos = 0;
        var adivinado = false;
        while (intentos < this.intentosM && !adivinado) {
            var suposicion = suposiciones[intentos];
            intentos++;
            if (suposicion === this.numeroSecreto) {
                console.log("\u00A1Felicidades! Adivinaste el n\u00FAmero en ".concat(intentos, " intento(s)."));
                adivinado = true;
            }
            else if (suposicion > this.numeroSecreto) {
                console.log("Tu suposición es demasiado alta.");
            }
            else {
                console.log("Tu suposición es demasiado baja.");
            }
            if (!adivinado && intentos < this.intentosM) {
                console.log("Intento ".concat(intentos, " fallido. Intenta de nuevo."));
            }
        }
        if (!adivinado) {
            console.log("Lo siento, has perdido. El n\u00FAmero era ".concat(this.numeroSecreto, "."));
        }
    };
    return Juego;
}());
var juego = new Juego();
juego.jugar([3, 5,9]); // Ejemplo de lista de suposiciones
