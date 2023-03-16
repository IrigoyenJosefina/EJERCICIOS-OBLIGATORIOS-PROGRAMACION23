"use strict";
exports.__esModule = true;
exports.JuegoDeCasino = void 0;
var JuegoDeCasino = /** @class */ (function () {
    //CONSTRUCTOR//
    function JuegoDeCasino(asientoDisponible, apuestaMin, misFichas, cartasEnMano) {
        this.asientosDisponibles = asientoDisponible;
        this.apuestaMinima = apuestaMin;
        this.misFichas = misFichas;
        this.cartasEnMano = cartasEnMano;
    }
    //METODOS//
    JuegoDeCasino.prototype.apostar = function (a) {
        if (a <= this.misFichas) {
            this.apuesta = a;
            return "Usted apost\u00F3 ".concat(a, " fichas");
        }
        else {
            return "No tiene suficientes fichas";
        }
    };
    JuegoDeCasino.prototype.numeroDeMesa = function () {
        return Math.floor(Math.random() * 10);
    };
    //GET Y SET//
    JuegoDeCasino.prototype.getAsientosDisponibles = function () {
        return this.asientosDisponibles;
    };
    JuegoDeCasino.prototype.getApuestaMínima = function () {
        return this.apuestaMinima;
    };
    JuegoDeCasino.prototype.setMisFichas = function (f) {
        this.misFichas = f;
    };
    JuegoDeCasino.prototype.getMisFichas = function () {
        return this.misFichas;
    };
    JuegoDeCasino.prototype.getCartasEnMano = function () {
        return this.cartasEnMano;
    };
    return JuegoDeCasino;
}());
exports.JuegoDeCasino = JuegoDeCasino;
