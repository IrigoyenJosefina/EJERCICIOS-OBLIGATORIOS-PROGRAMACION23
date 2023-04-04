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
exports.Pez = void 0;
var Animal_1 = require("./Animal");
var Pez = /** @class */ (function (_super) {
    __extends(Pez, _super);
    function Pez(aletas) {
        return _super.call(this, aletas) || this;
    }
    Pez.prototype.comer = function () {
        console.log("El pez esta comiendo");
    };
    Pez.prototype.jugar = function (nombre) {
        console.log("El pez esta jugando");
    };
    Pez.prototype.swin = function (fins) {
        console.log("El pez tiene ".concat(fins, " aletas"));
    };
    Pez.prototype.caminar = function (patas) {
        this.swin(patas);
    };
    Pez.prototype.getNombre = function () {
        return this.nombre;
    };
    Pez.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Pez;
}(Animal_1.Animal));
exports.Pez = Pez;
