import * as PIXI from "pixi.js";
export const PIXIHelper={
    RemoveSelf(container:PIXI.Container){
        return container.parent.removeChild(container);
    },
    AddChildTo(child:PIXI.Container,parent:PIXI.Container){
        return parent.addChild(child);
    },
    PivotRatio(container:PIXI.Container,x=0,y=x){
        return container.pivot.set(container.width*x,container.height*y);
    }
};