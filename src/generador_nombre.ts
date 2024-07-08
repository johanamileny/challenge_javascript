class Usuario {
    name: string;
    lastname: string;

    constructor(name: string, lastname: string){
           this.name =  name
           this.lastname = lastname
           
    }

          aleatorio():number {

           return Math.floor(Math.random() * 10) + 1; /* metodo crea numerosaleatorios */
    
          } 
          generdornameu(): string {

           const tresname = this.name.substring(0, 3);  /*sustrae las tres primeras lectras del nombre  */
           const treslastname = this.lastname.substring(0, 3);/*sustrae las tres primeras lectras del apellido  */
           const aleatorinumber = this.aleatorio()

           return tresname + treslastname + aleatorinumber;

          }

}


const usuario1 = new Usuario("johana","perez")


console.log(usuario1.generdornameu())