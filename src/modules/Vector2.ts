export class Vector2{
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
    copy(vector:{x:number,y:number}){
        this.x=vector.x;
        this.y=vector.y;
        return this;
    }
    add(vector:{x:number,y:number}){return this.copy(Vector2.add(this,vector))}
    sub(vector:{x:number,y:number}){return this.copy(Vector2.sub(this,vector))}
    mul(scalar:number){return this.copy(Vector2.mul(this,scalar))}
    dev(scalar:number){return this.copy(Vector2.dev(this,scalar))}
    distance(){return Vector2.distance(this)}
    static create(x:number,y:number){
        return new this(x,y);
    }
    static add(vector1:{x:number,y:number},vector2:{x:number,y:number}){
        return this.create(vector1.x+vector2.x,vector1.y+vector2.y);
    }
    static sub(vector1:{x:number,y:number},vector2:{x:number,y:number}){
        return this.create(vector1.x-vector2.x,vector1.y-vector2.y);
    }
    static mul(vector:{x:number,y:number},scalar:number){
        return this.create(vector.x*scalar,vector.y*scalar);
    }
    static dev(vector:{x:number,y:number},scalar:number){
        return this.mul(vector,1/scalar);
    }
    static dot(vector1:{x:number,y:number},vector2:{x:number,y:number}){
        return vector1.x*vector2.x+vector1.y*vector2.y;
    }
    static cross(vector1:{x:number,y:number},vector2:{x:number,y:number}){
        return vector1.x*vector2.y-vector1.y*vector2.x;
    }
    static distance(vector:{x:number,y:number}){
        return Math.sqrt(this.dot(vector,vector));
    }
    static normalize(vector:{x:number,y:number}){
        return this.dev(vector,this.distance(vector));
    }
}