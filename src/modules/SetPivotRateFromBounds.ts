import * as PIXI from "pixi.js";
export function SetPivotRateFromBounds(container:PIXI.Container,x=0,y=x){
    const bounds=container.getLocalBounds();
    container.pivot.set(bounds.x+bounds.width*x,bounds.y+bounds.height*y);
    return container;
}