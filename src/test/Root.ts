import * as Pixim from "@tawaship/pixim.js";
import * as SKLib from "./Lib";
class Gauge extends Pixim.Container{
    private Width:number;
    private Height:number;
    private Color:number;
    private base:PIXI.Graphics;
    private content:PIXI.Graphics;
    private contentMask:PIXI.Graphics;
    private frame:PIXI.Graphics;
    constructor(){
        super();

        this.Width=200;
        this.Height=50;
        this.Color=0xff0000;

        this.base=new PIXI.Graphics().beginFill(0x404040).drawRect(0,0,this.Width,this.Height);
        this.addChild(this.base);

        this.content=new PIXI.Graphics().beginFill(this.Color).drawRect(0,0,this.Width,this.Height);
        this.addChild(this.content);

        this.contentMask=new PIXI.Graphics().beginFill(0).drawRect(0,0,this.Width,this.Height);
        this.content.mask=this.contentMask;
        this.addChild(this.contentMask);

        this.frame=new PIXI.Graphics().lineStyle(2,0xffffff,1,0).drawRect(0,0,this.Width,this.Height);
        this.addChild(this.frame);
    }
    setColor(n:number){
        this.content.clear().beginFill(this.Color=n).drawRect(0,0,this.Width,this.Height);
    }
    setRatio(n:number){
        this.contentMask.clear().beginFill(0).drawRect(0,0,this.Width*n,this.Height);
    }
    taskAnimation(callback?:()=>void){
        SKLib.TaskHelper.taskLimit(this,60,(ratio)=>{
            this.setRatio(ratio);
        },callback);
    }
}
export class Root extends Pixim.Container{
    constructor($:Pixim.IContentDeliverData){
        super();

        console.log("$",$);

        const gauge=new Gauge();
        this.addChild(gauge);
        let isAnimating=false;
        gauge.on("pointertap",()=>{
            if(!isAnimating){
                isAnimating=true;
                gauge.taskAnimation(()=>{
                    isAnimating=false;
                    console.log("Animated");
                });
            }
        }).interactive=true;

        console.log("root",this);
    }
}