export class Seleccion{
    protected nombre:string; 
    protected apellido:string;
    protected numeroDePasaporte:string;
    protected fechaDeNacimiento:string;

    public constructor(nombre:string, apellido:string, numPasaporte:string, fechaNac:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.numeroDePasaporte = numPasaporte;
        this.fechaDeNacimiento = fechaNac;
    }

    public getInfo():this{
        return this
    }

    public calcularSueldo(e:number):string{
        let sueldoActual = 500 * e;
        return `Su sueldo actual es de ${sueldoActual} dolares`
    }
}