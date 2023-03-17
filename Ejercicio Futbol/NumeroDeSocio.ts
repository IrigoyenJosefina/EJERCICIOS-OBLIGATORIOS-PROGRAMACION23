export class NumeroDeSocio{
    private nombreClub:string;
    private numId:number;
    private profesion:string;

    public constructor(nombreClub:string,numId:number,profesion:string){
        this.nombreClub = nombreClub;
        this.numId = numId;
        this.profesion = profesion;
    }

    public getInfo():this{
        return this
    }
}