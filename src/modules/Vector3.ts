export class Vector3D{
    public x:number;
    public y:number;
    public z:number;
    constructor(x:number=0,y:number=0,z:number=0){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    set(x:number,y:number,z:number){
        this.x=x;
        this.y=y;
        this.z=z;
        return this;
    }
    copy(vector:{x:number,y:number,z:number}){
        this.x=vector.x;
        this.y=vector.y;
        this.z=vector.z;
        return this;
    }
    add(vector:{x:number,y:number,z:number}){return this.copy(Vector3D.add(this,vector))}
    sub(vector:{x:number,y:number,z:number}){return this.copy(Vector3D.sub(this,vector))}
    mul(scalar:number){return this.copy(Vector3D.mul(this,scalar))}
    dev(scalar:number){return this.copy(Vector3D.dev(this,scalar))}
    distance(){return Vector3D.distance(this)}
    static create(x:number,y:number,z:number){
        return new Vector3D(x,y,z);
    }
    static add(vector1:{x:number,y:number,z:number},vector2:{x:number,y:number,z:number}){
        return this.create(vector1.x+vector2.x,vector1.y+vector2.y,vector1.z+vector2.z);
    }
    static sub(vector1:{x:number,y:number,z:number},vector2:{x:number,y:number,z:number}){
        return this.create(vector1.x-vector2.x,vector1.y-vector2.y,vector1.z-vector2.z);
    }
    static mul(vector:{x:number,y:number,z:number},scalar:number){
        return this.create(vector.x*scalar,vector.y*scalar,vector.z*scalar);
    }
    static dev(vector:{x:number,y:number,z:number},scalar:number){
        return this.mul(vector,1/scalar);
    }
    static dot(vector1:{x:number,y:number,z:number},vector2:{x:number,y:number,z:number}){
        return vector1.x*vector2.x+vector1.y*vector2.y+vector1.z*vector2.z;
    }
    static cross(vector1:{x:number,y:number,z:number},vector2:{x:number,y:number,z:number}){
        return this.create(vector1.y*vector2.z-vector1.z*vector2.y,vector1.z*vector2.x-vector1.x*vector2.z,vector1.x*vector2.y-vector1.y*vector2.x);
    }
    static distance(vector:{x:number,y:number,z:number}){
        return Math.sqrt(this.dot(vector,vector));
    }
    static normalize(vector:{x:number,y:number,z:number}){
        return this.dev(vector,this.distance(vector));
    }
    static reflect(vector:{x:number,y:number,z:number},normal:{x:number,y:number,z:number}){
        const n=this.normalize(normal);
        const d=this.dot(n,vector);
        const m=this.mul(n,d);
        return this.add(vector,this.mul(m,-2));
    }
    static parallel(vector:{x:number,y:number,z:number},normal:{x:number,y:number,z:number}){
        const n=this.normalize(normal);
        const d=this.dot(n,vector);
        const m=this.mul(n,d);
        return this.add(vector,this.mul(m,-1));
    }
}