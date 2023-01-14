import * as PIXI from "pixi.js";
export const ContainerHelper={
    removeSelf(container:PIXI.Container){
        return container.parent&&container.parent.removeChild(container),container;
    },
    setPivotRatio(container:PIXI.Container,x:number=0,y:number=x){
        return container.pivot.set(container.width/container.scale.x*x,container.height/container.scale.y*y),container;
    }
}