function calcularBMI(peso: number, altura: number): void {
    console.log("Calculando  tu BMI...");
    const bmi = peso / (altura * altura);
    console.log(`Tu BMI es: ${bmi.toFixed(2)}`);

    if (bmi < 18.5) {
        console.log("***** BAJO PESO *****");
    } else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("***** NORMAL *****");
    } else if (bmi >= 25 && bmi < 29.9) {
        console.log("***** SOBRE PESO *****");
    } else {
        console.log("***** OBESIDAD *****");
    }
    //console.log("Cálculo de BMI completado.");
}

calcularBMI(60, 1.50);
console.log("El cálculo de tu BMI ha sido completado con éxito.");