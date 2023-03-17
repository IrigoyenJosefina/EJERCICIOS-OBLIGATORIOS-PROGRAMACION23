import { NumeroDeSocio } from "./NumeroDeSocio";
import { Seleccion } from "./Selección";

export class Entrenador extends Seleccion{
    protected numeroDeSocio:NumeroDeSocio;

    public constructor(nombre:string, apellido:string, numPasaporte:string, fechaNac:string,numeroDeSocio:NumeroDeSocio){
        super(nombre,apellido,numPasaporte,fechaNac);
        this.numeroDeSocio = numeroDeSocio;
    }

    public calcularSueldo(e:number):string{
        let sueldoActual = 1050 * e;
        return `Su sueldo actual es de ${sueldoActual} dolares`
    }
}

