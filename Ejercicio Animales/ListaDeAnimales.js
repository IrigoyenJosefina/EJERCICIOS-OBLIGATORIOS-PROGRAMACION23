"use strict";
exports.__esModule = true;
exports.ListaDeAnimales = void 0;
var ListaDeAnimales = /** @class */ (function () {
    function ListaDeAnimales(animales) {
        this.animales = [];
    }
    ListaDeAnimales.prototype.agregarAnimal = function (animal) {
        this.animales.push(animal);
    };
    ListaDeAnimales.prototype.buscar = function (animal) {
        var resultado = this.animales.includes(animal);
        return resultado;
    };
    ListaDeAnimales.prototype.removerAnimal = function (animal) {
        var eliminar = this.animales.indexOf(animal);
        console.log("Usted elimino ".concat(animal));
    };
    return ListaDeAnimales;
}());
exports.ListaDeAnimales = ListaDeAnimales;
