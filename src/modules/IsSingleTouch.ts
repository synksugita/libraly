import * as PIXI from "pixi.js";
export function isSingleTouch(e:PIXI.InteractionEvent){
    if(e.data.originalEvent instanceof TouchEvent)return e.data.originalEvent.targetTouches.length<=1;
    else return !0;
}