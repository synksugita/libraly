import * as PIXI from "pixi.js";
export class DragContainer extends PIXI.Container{
    private isDown:boolean;
    private touchedPoint:{x:number,y:number};
    constructor(){
        super();

        this.isDown=false;
        this.touchedPoint={x:0,y:0};

        this.on("pointerdown",(e:PIXI.InteractionEvent)=>{
            if(!this.isDown){
                const lp=e.data.getLocalPosition(this.parent);
                this.isDown=true;
                this.touchedPoint.x=lp.x,this.touchedPoint.y=lp.y;
                this.emit("down",e);
            }
        }).on("pointermove",(e:PIXI.InteractionEvent)=>{
            if(this.isDown){
                const lp=e.data.getLocalPosition(this.parent);
                const v={x:lp.x-this.touchedPoint.x,y:lp.y-this.touchedPoint.y};
                this.position.set(this.touchedPoint.x+v.x,this.touchedPoint.y+v.y);
                this.emit("move",e);
            }
        }).on("pointerup",(e:PIXI.InteractionEvent)=>{
            if(this.isDown){
                this.isDown=false;
                this.emit("up",e);
            }
        }).on("pointerupoutside",(e:PIXI.InteractionEvent)=>{
            if(this.isDown){
                this.isDown=false;
                this.emit("upoutside",e);
            }
        }).interactive=true;
    }
}