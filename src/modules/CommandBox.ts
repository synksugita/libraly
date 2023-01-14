import * as PIXI from "pixi.js";
import { TextBox } from "./TextBox";
type TCallback=()=>void;
export class CommandBox extends TextBox{
    protected data:{[key:string]:TCallback};
    protected isSelected:boolean;
    constructor(data:{[key:string]:TCallback}={}){
        super("");
        this.data=Object.assign(data);
        this.isSelected=false;
        this.attachEvent();
        this.g.clear();
    }
    protected event(e:KeyboardEvent){
        if(this.isSelected){
            this.addChar(e.key);
        }
        if(e.key=="Enter"){
            this.t.text="";
            if(this.isSelected=!this.isSelected){
                this.updateBox();
            }
            else{
                this.g.clear();
            }
        }
    }
    protected attachEvent(){
        this.on("added",()=>{
            document.addEventListener("keydown",(e)=>this.event(e));
        });
        this.on("removed",()=>{
            document.removeEventListener("keydown",(e)=>this.event(e));
        });
    }
    protected onEnter(str:string){
        if(!str.length)return;
        const f=this.data[str];
        if(typeof f=="function"){
            f();
        }
        else{
            switch(str){
                case "help":{
                    console.log(this.data);
                }break;
                default:{
                    console.log(str+" is not found");
                }
            }
        }
    }
    protected addChar(c:string){
        switch(c){
            case "Enter":{
                this.onEnter(this.t.text);
            }break;
            case "Backspace":{
                this.t.text=this.t.text.substr(0,this.t.text.length-1);
            }break;
            default:{
                if(c.length==1){
                    this.t.text+=c;
                }
            }
        }
        this.updateBox();
    }
    addData(data:{[key:string]:TCallback}){
        const keys=Object.keys(data);
        for(let i=0;i<keys.length;i++){
            const key=keys[i];
            this.data[key]=data[key];
        }
    }
}