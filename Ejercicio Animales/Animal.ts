export abstract class Animal{

    private patas: number;

    public constructor(patas:number){
        this.patas = patas;
    }

    public getPatas():number{
        return this.patas;
    }

    public setPatas(patas:number):void{
        this.patas=patas;
    }

    abstract comer():void;
    abstract caminar(patas:number):void;
}