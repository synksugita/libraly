import * as PIXI from "pixi.js";
import { TextBox } from "./TextBox";
type TCallback=()=>void;
export class TextButton extends TextBox{
    protected response:TCallback;
    protected colors:{[i:number]:number};
    protected state:number;
    constructor(text:string="",response:TCallback){
        super(text);
        this.response=response;
        this.colors={
            0:0x808080,
            1:0x808080,
            2:0xa0a0a0,
            3:0x606060
        };
        this.state=0;
        this.attachEvent();
        this.update();
    }
    protected update(){
        this.drawBox(this.colors[this.state]);
    }
    protected attachEvent(){
        this.on("pointerdown",()=>{
            this.state|=1;
            this.update();
        });
        this.on("pointerup",()=>{
            if(this.state&1){
                this.state&=~1;
                this.update();
            }
        });
        this.on("pointerupoutside",()=>{
            if(this.state&1){
                this.state&=~1;
                this.update();
            }
        });
        this.on("pointerover",()=>{
            this.state|=2;
            this.update();
        });
        this.on("pointerout",()=>{
            this.state&=~2;
            this.update();
        });
        this.on("pointertap",()=>{this.response()});
        this.interactive=true;
    }
}