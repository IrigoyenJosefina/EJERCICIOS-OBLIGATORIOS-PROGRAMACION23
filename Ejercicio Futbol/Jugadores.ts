import { NumeroDeSocio } from "./NumeroDeSocio";
import { Seleccion } from "./Selección";

export class Jugadores extends Seleccion{
    protected posicion:string|number;
    protected numeroDeSocio:NumeroDeSocio;

    public constructor(nombre:string, apellido:string, numPasaporte:string, fechaNac:string, posicion:string|number,numeroDeSocio:NumeroDeSocio){
        super(nombre,apellido,numPasaporte,fechaNac);
        this.posicion = posicion;
        this.numeroDeSocio = numeroDeSocio;
    }

    public getPosicion():string|number{
       return this.posicion;
    }

    public setPosicion(p:string|number){
        this.posicion = p;
    }

    public calcularSueldo(e:number):string{
        let sueldoActual = 1200 * e;
        return `Su sueldo actual es de ${sueldoActual} dolares`
    }
}