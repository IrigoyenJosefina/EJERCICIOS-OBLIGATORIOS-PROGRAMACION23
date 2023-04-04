import { Animal } from "./Animal";

export class Araña extends Animal {
    public comer():void{
        console.log(`La araña está comiendo`);
    }

    public caminar(ParamPatas:number):void{
        console.log(`La araña tiene ${ParamPatas} patas`);
    }
   
}