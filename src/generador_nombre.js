var Usuario = /** @class */ (function () {
    function Usuario(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    Usuario.prototype.aleatorio = function () {
        return Math.floor(Math.random() * 10) + 1; /* metodo crea numerosaleatorios */
    };
    Usuario.prototype.generdornameu = function () {
        var tresname = this.name.substring(0, 3); /*sustrae las tres primeras lectras del nombre  */
        var treslastname = this.lastname.substring(0, 3); /*sustrae las tres primeras lectras del apellido  */
        var aleatorinumber = this.aleatorio();
        return tresname + treslastname + aleatorinumber;
    };
    return Usuario;
}());
var usuario1 = new Usuario("johana", "perez");
console.log(usuario1.generdornameu());
