import * as PIXI from "pixi.js";
export function SwitchContainer(target:PIXI.Container,transferTo:PIXI.Container){
    if(target.parent){
        const lp=transferTo.toLocal(target,target.parent);
        target.position.set(lp.x,lp.y);
    }
    transferTo.addChild(target);
}