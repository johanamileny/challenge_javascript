function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';

    // Verifica múltiplos de 3
    if (i % 3 === 0) {
      output += 'fizz';
    }

    // Verifica múltiplos de 5
    if (i % 5 === 0) {
      output += 'buzz';
    }

    // Si el resultado está vacío, usa el número
    console.log(output || i);
  }
}

// Llama a la función para ejecutarla
fizzBuzz();
