export interface XY{
    x:number;
    y:number;
}
export class Complex implements XY{
    public x:number;
    public y:number;
    constructor(x:number=0,y:number=0){
        this.x=x;
        this.y=y;
    }
    set(x:number,y:number){
        this.x=x;
        this.y=y;
        return this;
    }
    copy(complex:XY){
        this.x=complex.x;
        this.y=complex.y;
        return this;
    }
    static create(x:number,y:number){
        return new Complex(x,y);
    }
    static add(complex1:XY,complex2:XY){
        return this.create(complex1.x+complex2.x,complex1.y+complex2.y);
    }
    static sub(complex1:XY,complex2:XY){
        return this.create(complex1.x-complex2.x,complex1.y-complex2.y);
    }
    static mul(complex1:XY,complex2:XY){
        return this.create(complex1.x*complex2.x-complex1.y*complex2.y,complex1.y*complex2.x+complex1.x*complex2.y);
    }
    static dev(complex1:XY,complex2:XY){
        const n=complex2.x*complex2.x+complex2.y*complex2.y;
        return this.create((complex1.x*complex2.x+complex1.y*complex2.y)/n,(complex1.y*complex2.x-complex1.x*complex2.y)/n);
    }
}