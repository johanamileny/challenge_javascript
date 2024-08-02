class RPNCalculator {
    private stack: number[] = [];

    // Método principal para evaluar la expresión RPN
    public evaluar(expresion: string): number {
        const tokens = this.tokenizar(expresion);
        
        for (const token of tokens) {
            if (this.esNumero(token)) {
                this.stack.push(Number(token));
            } else if (this.esOperador(token)) {
                this.ejecutarOperacion(token);
            } else {
                throw new Error(`Token desconocido: ${token}`);
            }
        }

        if (this.stack.length !== 1) {
            throw new Error('La expresión RPN es inválida.');
        }

        return this.stack.pop()!;
    }

    // Método para tokenizar la expresión
    private tokenizar(expresion: string): string[] {
        return expresion.trim().split(/\s+/);
    }

    // Método para verificar si el token es un número
    private esNumero(token: string): boolean {
        return !isNaN(Number(token));
    }

    // Método para verificar si el token es un operador
    private esOperador(token: string): boolean {
        return ['+', '-', '*', '/'].includes(token);
    }

    // Método para ejecutar una operación basada en el operador
    private ejecutarOperacion(operador: string): void {
        if (this.stack.length < 2) {
            throw new Error('No hay suficientes operandos en la pila.');
        }

        const b = this.stack.pop()!;
        const a = this.stack.pop()!;

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
                throw new Error(`Operador desconocido: ${operador}`);
        }
    }
}

// Ejemplos de uso
const calculadora = new RPNCalculator();
console.log(calculadora.evaluar("3 4 +")); // Devuelve 7
console.log(calculadora.evaluar("5 1 2 + 4 * + 3 -")); // Devuelve 14
console.log(calculadora.evaluar("7 8 + 3 2 + /")); // Devuelve 3
