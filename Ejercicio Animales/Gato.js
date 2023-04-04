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
exports.Gato = void 0;
var Animal_1 = require("./Animal");
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.comer = function () {
        console.log("El gato está comiendo");
    };
    Gato.prototype.jugar = function (nombre) {
        console.log("".concat(nombre, " esta jugando"));
    };
    Gato.prototype.walk = function (paws) {
        console.log("El gato camina con ".concat(paws, " patas"));
    };
    Gato.prototype.caminar = function (patas) {
        console.log(this.walk);
    };
    Gato.prototype.getNombre = function () {
        return this.nombre;
    };
    Gato.prototype.getName = function () {
        return this.nombre;
    };
    Gato.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Gato.prototype.setName = function (name) {
        this.nombre = name;
    };
    return Gato;
}(Animal_1.Animal));
exports.Gato = Gato;
