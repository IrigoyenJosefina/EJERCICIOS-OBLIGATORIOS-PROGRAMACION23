"use strict";
exports.__esModule = true;
var Blackjack_1 = require("./Blackjack");
var CartasEnMano_1 = require("./CartasEnMano");
var Poker_1 = require("./Poker");
var Casino = /** @class */ (function () {
    function Casino(localidad, horaA, horaC, poker, blackjack) {
        this.localidad = localidad;
        this.horaApertura = horaA;
        this.horaDeCierre = horaC;
        this.poker = poker;
        this.blackjack = blackjack;
    }
    return Casino;
}());
var carta1 = 3;
var carta2 = "A";
var carta3 = 7;
var carta4 = "J";
var cartasEnManoPoker01 = [new CartasEnMano_1.CartasEnMano(carta1), new CartasEnMano_1.CartasEnMano(carta2), new CartasEnMano_1.CartasEnMano(carta3), new CartasEnMano_1.CartasEnMano(carta4)];
var poker01 = new Poker_1.Poker(4, 50, 150, cartasEnManoPoker01);
var cartasEnManoBlackJack01 = [new CartasEnMano_1.CartasEnMano(3), new CartasEnMano_1.CartasEnMano("A"), new CartasEnMano_1.CartasEnMano(7), new CartasEnMano_1.CartasEnMano("A")];
var blackjack01 = new Blackjack_1.Blackjack(2, 70, 50, cartasEnManoBlackJack01);
var casino01 = new Casino("Mar del plata", 9, 24, poker01, blackjack01);
var apuesta = blackjack01.apostar(70);
console.log(apuesta);
var apuesta1 = poker01.apostar(50);
console.log(apuesta1);
poker01.setMisFichas(450);
//let infoPoker01 = poker01.getInfo//
var mesaPoker1 = poker01.numeroDeMesa();
console.log(mesaPoker1);
console.log(poker01.getMisFichas());
console.log(poker01.getCartasEnMano());
