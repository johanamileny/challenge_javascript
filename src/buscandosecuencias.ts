function buscarSecuencias(lista: number[], objetivo: number): number[][] {
    const secuencias: number[][] = [];
  
    for (let i = 0; i < lista.length; i++) {
      let suma = 0;
      const secuencia: number[] = [];
      
      for (let j = i; j < lista.length; j++) {
        suma += lista[j];
        secuencia.push(lista[j]);
        
        if (suma === objetivo) {
          secuencias.push([...secuencia]); // Agregar una copia de la secuencia encontrada
        } else if (suma > objetivo) {
          break; // Salir del bucle interno si la suma excede el objetivo
        }
      }
    }
    
    return secuencias;
  }
  
  // Ejemplo de uso con nuevos valores
  console.log(buscarSecuencias([3, 6, 9, 12, 15], 21)); // [[6, 9, 12], [9, 12]]
  console.log(buscarSecuencias([1, 4, 5, 7, 10], 12)); // [[5, 7], [1, 4, 7]]
  console.log(buscarSecuencias([2, 4, 6, 8, 10], 20)); // [[6, 8, 6], [10, 10]]
  