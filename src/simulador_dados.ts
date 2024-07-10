class LanzamientoDeDados {
    // Array que almacena los valores de los dos dados, inicializados en 0
    private dados: number[] = [0, 0];

    private lanzarDado(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

    public lanzarDados(): void {

        this.dados = [this.lanzarDado(), this.lanzarDado()];
    }

    public obtenerSuma(): number {
        return this.dados[0] + this.dados[1];
    }

    //imprimimos suma en la consola
    public imprimirResultado(): void {
        console.log(`Dado 1: ${this.dados[0]}`);
        console.log(`Dado 2: ${this.dados[1]}`);
        console.log(`Suma: ${this.obtenerSuma()}`);
    }
}

//creamos unainstancia
const simulador = new LanzamientoDeDados();

simulador.lanzarDados();
simulador.imprimirResultado();
