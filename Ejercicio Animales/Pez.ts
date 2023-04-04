import { Animal } from "./Animal";
import { iMascota } from "./Mascota";

export class Pez extends Animal implements iMascota{
 
    private nombre:string;

    public constructor(aletas:number){
        super(aletas);
    }

    public comer():void{
        console.log("El pez esta comiendo");
    }

    public jugar(nombre:string):void{
        console.log("El pez esta jugando");
    }

    public swin(fins:number):void{
        console.log(`El pez tiene ${fins} aletas`); 
    }

    public caminar(patas: number): void {
        this.swin(patas);
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }
}