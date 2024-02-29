import * as PIXI from "pixi.js";
export function CreateWhiteTexture(texture:PIXI.Texture){
    const canvas=document.createElement("canvas");
    const context=canvas.getContext("2d");
    if(context){
        const width=texture.width;
        const height=texture.height;
        const frame=texture.frame;
        const resource:any=texture.baseTexture.resource;
        const htmlImageElement:HTMLImageElement=resource.source;
        canvas.width=width;
        canvas.height=height;
        context.drawImage(htmlImageElement,-frame.x,-frame.y);
        const imageData=context.getImageData(0,0,width,height);
        const data=imageData.data;
        for(let i=0;i<data.length;i+=4){
            data[i  ]=255;//r
            data[i+1]=255;//g
            data[i+2]=255;//b
        }
        context.putImageData(imageData,0,0);
        return PIXI.Texture.from(canvas);
    }else return PIXI.Texture.EMPTY;
}