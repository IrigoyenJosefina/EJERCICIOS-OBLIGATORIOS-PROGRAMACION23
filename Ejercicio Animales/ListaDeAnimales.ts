import { Animal } from "./Animal";

export class ListaDeAnimales{
    private animales:Animal[];

    public constructor(animales:Animal[]){
        this.animales = [];
    }

    public agregarAnimal(animal:Animal):void{
       this.animales.push(animal)
    }

    public buscar(animal:Animal):boolean{
      const resultado = this.animales.includes(animal);
      return resultado;
    }

    public removerAnimal(animal:Animal):void{
       const eliminar = this.animales.indexOf(animal);
       console.log(`Usted elimino ${eliminar}`);
    }
}