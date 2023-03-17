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
exports.Masajista = void 0;
var Selecci_n_1 = require("./Selecci\u00F3n");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(nombre, apellido, numPasaporte, fechaNac, diasDisponible, numeroDeSocio) {
        var _this = _super.call(this, nombre, apellido, numPasaporte, fechaNac) || this;
        _this.diasDisponible = diasDisponible;
        _this.numeroDeSocio = numeroDeSocio;
        return _this;
    }
    Masajista.prototype.calcularSueldo = function (e) {
        var sueldoActual = 800 * e;
        return "Su sueldo actual es de ".concat(sueldoActual, " dolares");
    };
    return Masajista;
}(Selecci_n_1.Seleccion));
exports.Masajista = Masajista;
