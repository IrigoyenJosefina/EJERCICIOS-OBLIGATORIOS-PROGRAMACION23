import { Masajista } from "./Masajista";
import { Entrenador } from "./Entrenador";
import { Jugadores } from "./Jugadores";
import { NumeroDeSocio } from "./NumeroDeSocio";

let numeroDeSocioEnzoF:NumeroDeSocio = new NumeroDeSocio("Chelsea",1902822, "Jugador de futbol");

let jugador01:Jugadores = new Jugadores("Enzo","Fernandez","ZAB000254","17/01/2001","Centrocampista",numeroDeSocioEnzoF);

let numeroDeSocioLionelS:NumeroDeSocio = new NumeroDeSocio("Chelsea",2341567,"Entrenador")

let entrenador01:Entrenador = new Entrenador("Lionel","Scaloni","SEW902345","16/05/1978", numeroDeSocioLionelS);

let numeroDeSocioMarceloD: NumeroDeSocio = new NumeroDeSocio("Chelsea",1234098,"Masajista");

let masajista01:Masajista = new Masajista("Marcelo", "D´andrea","PSW908721","09/10/1980","Lunes,miercoles y viernes",numeroDeSocioMarceloD);

console.log(jugador01.calcularSueldo(28));
console.log(entrenador01.calcularSueldo(25));
console.log(masajista01.calcularSueldo(12));
