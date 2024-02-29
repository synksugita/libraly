import * as PIXI from "pixi.js";
import * as Pixim from "@tawaship/pixim.js";
export class Button extends Pixim.Container{
    private isTouched:boolean;
    protected readonly imageContainer:PIXI.Container;
    constructor(container:PIXI.Container,reaction:()=>void){
        super();

        this.isTouched=false;

        this.imageContainer=new PIXI.Container();
        this.imageContainer.addChild(container);
        this.addChild(this.imageContainer);

        this.on("pointerdown",(e:PIXI.InteractionEvent)=>{
            if(!this.isTouched){
                this.isTouched=true;
                this.emit("down",e);
            }
        }).on("pointermove",(e:PIXI.InteractionEvent)=>{
            if(this.isTouched){
                this.emit("move",e);
            }
        }).on("pointerup",(e:PIXI.InteractionEvent)=>{
            if(this.isTouched){
                this.isTouched=false;
                this.emit("up",e);
                reaction();
            }
        }).on("pointerupoutside",(e:PIXI.InteractionEvent)=>{
            if(this.isTouched){
                this.isTouched=false;
                this.emit("upoutside",e);
            }
        }).interactive=true;
        
        this.updateHitArea();
    }
    updateHitArea(){
        this.hitArea=this.imageContainer.getLocalBounds();
    }
}