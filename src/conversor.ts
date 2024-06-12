function convertirCelsiusAFahrenheit(tempCelsius: number): void {
    const tempFahrenheit: number = (tempCelsius * 9/5) + 32;
    console.log(`¡Hey! Si tienes ${tempCelsius} grados Celsius, eso sería como ${tempFahrenheit.toFixed(2)} grados Fahrenheit.`);
}

convertirCelsiusAFahrenheit(17);