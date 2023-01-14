import * as PIXI from "pixi.js";
type TCallback=()=>void;
class ObservableXY{
    protected _x:number;
    protected _y:number;
    protected callback:TCallback;
    constructor(x:number,y:number,callback:TCallback){
        this._x=x,this._y=y;
        this.callback=callback;
    }
    get x(){return this._x}
    set x(n:number){this._x=n,this.callback()}
    get y(){return this._y}
    set y(n:number){this._y=n,this.callback()}
    set(x:number=0,y:number=x){return this._x=x,this._y=y,this.callback(),this}
}
export class TextBox extends PIXI.Container{
    protected _BoxColor:number;
    protected g:PIXI.Graphics;
    protected t:PIXI.Text;
    readonly anchor:ObservableXY;
    constructor(text:string=""){
        super();
        this._BoxColor=0x808080;
        this.g=new PIXI.Graphics();
        this.t=new PIXI.Text(text,{fill:0xffffff,fontSize:20});
        this.anchor=new ObservableXY(0,0,()=>{this.updateAnchor()});
        this.addChild(this.g,this.t);
        this.updateBox();
    }
    get text(){return this.t.text}
    set text(n:string){this.t.text=n,this.updateBox()}
    get TextColor(){return this.t.style.fill}
    set TextColor(n:number){this.t.style.fill=n}
    get TextSize(){return this.t.style.fontSize}
    set TextSize(n:number){this.t.style.fontSize=n,this.updateBox()}
    get BoxColor(){return this._BoxColor}
    set BoxColor(n:number){this.drawBox(n)}
    protected drawBox(color:number){
        const width=this.t.width,height=this.t.height;
        this._BoxColor=color;
        this.g.clear().beginFill(color).drawRect(0,0,width,height).endFill();
    }
    protected updateAnchor(){
        this.g.pivot.set(this.g.width*this.anchor.x,this.g.height*this.anchor.y);
        this.t.anchor.set(this.anchor.x,this.anchor.y);
    }
    updateBox(){
        this.drawBox(this._BoxColor);
        this.updateAnchor();
    }
}