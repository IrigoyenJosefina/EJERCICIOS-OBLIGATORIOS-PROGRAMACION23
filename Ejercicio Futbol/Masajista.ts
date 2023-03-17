import { NumeroDeSocio } from "./NumeroDeSocio";
import { Seleccion } from "./Selección";

export class Masajista extends Seleccion{
  protected diasDisponible:string;
  protected numeroDeSocio:NumeroDeSocio;

  public constructor(nombre:string, apellido:string, numPasaporte:string, fechaNac:string,diasDisponible:string,numeroDeSocio:NumeroDeSocio){
    super(nombre,apellido,numPasaporte,fechaNac);
    this.diasDisponible = diasDisponible;
    this.numeroDeSocio = numeroDeSocio;
  }

  public calcularSueldo(e:number):string{
    let sueldoActual = 800 * e;
    return `Su sueldo actual es de ${sueldoActual} dolares`
}
}