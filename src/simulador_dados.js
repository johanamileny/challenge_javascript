var LanzamientoDeDados = /** @class */ (function () {
    function LanzamientoDeDados() {
        // Array que almacena los valores de los dos dados, inicializados en 0
        this.dados = [0, 0];
    }
    LanzamientoDeDados.prototype.lanzarDado = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    LanzamientoDeDados.prototype.lanzarDados = function () {
        this.dados = [this.lanzarDado(), this.lanzarDado()];
    };
    LanzamientoDeDados.prototype.obtenerSuma = function () {
        return this.dados[0] + this.dados[1];
    };
    //imprimimos suma en la consola
    LanzamientoDeDados.prototype.imprimirResultado = function () {
        console.log("Dado 1: ".concat(this.dados[0]));
        console.log("Dado 2: ".concat(this.dados[1]));
        console.log("Suma: ".concat(this.obtenerSuma()));
    };
    return LanzamientoDeDados;
}());
//creamos unainstancia
var simulador = new LanzamientoDeDados();
simulador.lanzarDados();
simulador.imprimirResultado();
