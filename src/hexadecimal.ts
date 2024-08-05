function decimalAOctal(decimal: number): string {
    if (decimal === 0) return '0';
    let octal = '';
    while (decimal > 0) {
        octal = (decimal % 8) + octal;
        decimal = Math.floor(decimal / 8);
    }
    return octal;
}

function decimalAHexadecimal(decimal: number): string {
    if (decimal === 0) return '0';
    const hexDigits = '0123456789ABCDEF';
    let hexadecimal = '';
    while (decimal > 0) {
        hexadecimal = hexDigits[decimal % 16] + hexadecimal;
        decimal = Math.floor(decimal / 16);
    }
    return hexadecimal;
}

function convertirNumero(decimal: number): { octal: string, hexadecimal: string } {
    return {
        octal: decimalAOctal(decimal),
        hexadecimal: decimalAHexadecimal(decimal)
    };
}

// Ejemplo de uso
const decimal = 255;
const resultado = convertirNumero(decimal);
console.log(`Octal: ${resultado.octal}`);         // Octal: 377
console.log(`Hexadecimal: ${resultado.hexadecimal}`); // Hexadecimal: FF
