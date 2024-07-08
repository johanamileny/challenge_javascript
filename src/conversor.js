function convertirCelsiusAFahrenheit(tempCelsius) {
    var tempFahrenheit = (tempCelsius * 9 / 5) + 32;
    console.log("\u00A1Hey! Si tienes ".concat(tempCelsius, " grados Celsius, eso ser\u00EDa como ").concat(tempFahrenheit.toFixed(2), " grados Fahrenheit."));
}
convertirCelsiusAFahrenheit(17);
