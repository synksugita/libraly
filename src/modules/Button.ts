import * as Pixim from "@tawaship/pixim.js";
export class ButtonBase extends Pixim.Container{
    private isDown:boolean;
    protected imageContainer:PIXI.Container;
    constructor(container:PIXI.Container,reaction:()=>void){
        super();

        this.isDown=false;

        this.imageContainer=new PIXI.Container();
        this.imageContainer.addChild(container);
        this.addChild(this.imageContainer);

        this.on("pointerdown",(e:PIXI.InteractionEvent)=>{
            if(!this.isDown){
                this.isDown=true;
                this.emit("down",e);
            }
        }).on("pointermove",(e:PIXI.InteractionEvent)=>{
            if(this.isDown){
                const lp=e.data.getLocalPosition(this);
                if(!this.hitArea.contains(lp.x,lp.y)){
                    this.isDown=false;
                    this.emit("out",e);
                }
                this.emit("move",e);
            }
        }).on("pointerup",(e:PIXI.InteractionEvent)=>{
            if(this.isDown){
                this.isDown=false;
                this.emit("up",e);
                reaction();
            }
        }).on("pointerupoutside",(e:PIXI.InteractionEvent)=>{
            if(this.isDown){
                this.isDown=false;
                this.emit("upoutside",e);
            }
        }).interactive=true;
        
        this.updateHitArea();
    }
    updateHitArea(){
        this.hitArea=this.imageContainer.getLocalBounds();
    }
}