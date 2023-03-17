"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var Selecci_n_1 = require("./Selecci\u00F3n");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, numPasaporte, fechaNac, numeroDeSocio) {
        var _this = _super.call(this, nombre, apellido, numPasaporte, fechaNac) || this;
        _this.numeroDeSocio = numeroDeSocio;
        return _this;
    }
    Entrenador.prototype.calcularSueldo = function (e) {
        var sueldoActual = 1050 * e;
        return "Su sueldo actual es de ".concat(sueldoActual, " dolares");
    };
    return Entrenador;
}(Selecci_n_1.Seleccion));
exports.Entrenador = Entrenador;
