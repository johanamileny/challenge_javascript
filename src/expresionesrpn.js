var RPNCalculator = /** @class */ (function () {
    function RPNCalculator() {
        this.stack = [];
    }
    // Método principal para evaluar la expresión RPN
    RPNCalculator.prototype.evaluar = function (expresion) {
        var tokens = this.tokenizar(expresion);
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            if (this.esNumero(token)) {
                this.stack.push(Number(token));
            }
            else if (this.esOperador(token)) {
                this.ejecutarOperacion(token);
            }
            else {
                throw new Error("Token desconocido: ".concat(token));
            }
        }
        if (this.stack.length !== 1) {
            throw new Error('La expresión RPN es inválida.');
        }
        return this.stack.pop();
    };
    // Método para tokenizar la expresión
    RPNCalculator.prototype.tokenizar = function (expresion) {
        return expresion.trim().split(/\s+/);
    };
    // Método para verificar si el token es un número
    RPNCalculator.prototype.esNumero = function (token) {
        return !isNaN(Number(token));
    };
    // Método para verificar si el token es un operador
    RPNCalculator.prototype.esOperador = function (token) {
        return ['+', '-', '*', '/'].includes(token);
    };
    // Método para ejecutar una operación basada en el operador
    RPNCalculator.prototype.ejecutarOperacion = function (operador) {
        if (this.stack.length < 2) {
            throw new Error('No hay suficientes operandos en la pila.');
        }
        var b = this.stack.pop();
        var a = this.stack.pop();
        switch (operador) {
            case '+':
                this.stack.push(a + b);
                break;
            case '-':
                this.stack.push(a - b);
                break;
            case '*':
                this.stack.push(a * b);
                break;
            case '/':
                if (b === 0) {
                    throw new Error('División por cero.');
                }
                this.stack.push(a / b);
                break;
            default:
                throw new Error("Operador desconocido: ".concat(operador));
        }
    };
    return RPNCalculator;
}());
// Ejemplos de uso
var calculadora = new RPNCalculator();
console.log(calculadora.evaluar("3 4 +")); // Devuelve 7
console.log(calculadora.evaluar("5 1 2 + 4 * + 3 -")); // Devuelve 14
console.log(calculadora.evaluar("7 8 + 3 2 + /")); // Devuelve 3
