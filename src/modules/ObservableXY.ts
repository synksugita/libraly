export class ObservableXY{
    private _x:number;
    private _y:number;
    private _callback:()=>void;
    constructor(x:number,y:number,callback:()=>void){
        this._x=x,this._y=y;
        this._callback=callback;
    }
    get x(){return this._x}
    set x(n:number){this._x=n,this._callback()}
    get y(){return this._y}
    set y(n:number){this._y=n,this._callback()}
    set(x:number=0,y:number=x){return this._x=x,this._y=y,this._callback()}
}