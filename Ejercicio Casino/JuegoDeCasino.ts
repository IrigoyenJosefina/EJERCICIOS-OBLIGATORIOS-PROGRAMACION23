import { CartasEnMano } from "./CartasEnMano";

export class JuegoDeCasino{
    //ATRIBUTOS//
    private asientosDisponibles:number;
    private apuestaMinima:number; 
    protected misFichas:number;
    protected cartasEnMano:CartasEnMano[];
    protected apuesta:number;

    //CONSTRUCTOR//
    public constructor(asientoDisponible:number,apuestaMin:number,misFichas:number,cartasEnMano:CartasEnMano[]){
       this.asientosDisponibles = asientoDisponible;
       this.apuestaMinima = apuestaMin;
       this.misFichas = misFichas;
       this.cartasEnMano = cartasEnMano;
    }

    //METODOS//
    public apostar(a:number):string{
       if(a<=this.misFichas){
        this.apuesta = a;
        return `Usted apostó ${a} fichas`
       }else{
        return `No tiene suficientes fichas`
       }
    }

    public numeroDeMesa():number{
        return Math.floor(Math.random()*10);
    }

    //GET Y SET//
    public getAsientosDisponibles():number{
        return this.asientosDisponibles;
    }

    public getApuestaMínima():number{
        return this.apuestaMinima;
    }

    public setMisFichas(f:number):void{
        this.misFichas = f;
    }

    public getMisFichas():number{
        return this.misFichas;
    }
    
    public getCartasEnMano():CartasEnMano[]{
        return this.cartasEnMano;
    }

}