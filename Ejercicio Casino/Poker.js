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
exports.Poker = void 0;
var JuegoDeCasino_1 = require("./JuegoDeCasino");
var Poker = /** @class */ (function (_super) {
    __extends(Poker, _super);
    function Poker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Poker.prototype.getInfo = function () {
        return this;
    };
    return Poker;
}(JuegoDeCasino_1.JuegoDeCasino));
exports.Poker = Poker;
