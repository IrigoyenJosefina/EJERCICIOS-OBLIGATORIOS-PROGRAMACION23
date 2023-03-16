import { Blackjack } from "./Blackjack";
import { CartasEnMano } from "./CartasEnMano";
import { Poker } from "./Poker";


class Casino{
    private localidad: string;
    private horaApertura:number;
    private horaDeCierre:number;
    protected poker:Poker;
    protected blackjack:Blackjack;

    public constructor(localidad:string,horaA:number,horaC:number,poker:Poker,blackjack:Blackjack){
        this.localidad = localidad;
        this.horaApertura = horaA;
        this.horaDeCierre = horaC;
        this.poker = poker;
        this.blackjack = blackjack;
    }
}

let carta1:number = 3;
let carta2:string = "A";
let carta3:number = 7;
let carta4:string = "J"

let cartasEnManoPoker01: CartasEnMano[] = [new CartasEnMano(carta1),new CartasEnMano(carta2),new CartasEnMano(carta3),new CartasEnMano(carta4)];

let poker01:Poker = new Poker(4,50,150,cartasEnManoPoker01);

let cartasEnManoBlackJack01: CartasEnMano[] = [new CartasEnMano(3),new CartasEnMano("A"),new CartasEnMano(7),new CartasEnMano("A")];

let blackjack01:Blackjack = new Blackjack(2,70,50,cartasEnManoBlackJack01);

let casino01:Casino = new Casino("Mar del plata",9,24,poker01,blackjack01);

let apuesta = blackjack01.apostar(70); 
console.log(apuesta);

let apuesta1 = poker01.apostar(50);
console.log(apuesta1);

poker01.setMisFichas(450);

//let infoPoker01 = poker01.getInfo//

let mesaPoker1 = poker01.numeroDeMesa();
console.log(mesaPoker1);
console.log(poker01.getMisFichas());

console.log(poker01.getCartasEnMano());

