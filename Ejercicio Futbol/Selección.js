"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    function Seleccion(nombre, apellido, numPasaporte, fechaNac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroDePasaporte = numPasaporte;
        this.fechaDeNacimiento = fechaNac;
    }
    Seleccion.prototype.getInfo = function () {
        return this;
    };
    Seleccion.prototype.calcularSueldo = function (e) {
        var sueldoActual = 500 * e;
        return "Su sueldo actual es de ".concat(sueldoActual, " dolares");
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
