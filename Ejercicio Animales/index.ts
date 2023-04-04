import { ListaDeAnimales } from "./ListaDeAnimales";
import { Araña } from "./Araña";
import { Pez } from "./Pez";
import { Gato } from "./Gato";

let gato01:Gato = new Gato(4);
let pez01:Pez = new Pez(6);
let araña01:Araña = new Araña(8);
let pez02:Pez = new Pez(2);


let ListaAnimales01:ListaDeAnimales = new ListaDeAnimales([]);

ListaAnimales01.agregarAnimal(pez01);
ListaAnimales01.agregarAnimal(gato01);

console.log(ListaAnimales01);

console.log(ListaAnimales01.buscar(gato01));
console.log(ListaAnimales01.buscar(araña01));


console.log(ListaAnimales01);
ListaAnimales01.removerAnimal(gato01);
console.log(ListaAnimales01);

