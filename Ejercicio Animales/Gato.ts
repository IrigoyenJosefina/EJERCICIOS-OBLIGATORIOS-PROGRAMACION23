import { Animal } from "./Animal";
import { iMascota } from "./Mascota";

export class Gato extends Animal implements iMascota{
    private nombre:string;

    public comer():void{
        console.log("El gato está comiendo");
    }

    public jugar(nombre:string):void{
        console.log(`${nombre} esta jugando`);
    }

    public walk(paws:number):void{
        console.log(`El gato camina con ${paws} patas`);
    }

    public caminar(patas: number): void {
        console.log(this.walk);
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getName():string{
        return this.nombre;
    }

    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }

    public setName(name:string):void{
        this.nombre = name;
    }
}