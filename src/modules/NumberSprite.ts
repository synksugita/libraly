import * as PIXI from "pixi.js";
export class NumberSprite extends PIXI.Container{
    protected interval:number;
    protected value:string|number;
    protected readonly textures:readonly PIXI.Texture[];
    protected readonly pivotRate:{x:number,y:number};
    protected readonly sprites:PIXI.Sprite[];
    protected readonly spriteContainer:PIXI.Container;
    constructor(textures:readonly PIXI.Texture[]){
        super();

        this.interval=0;
        this.value=0;
        this.textures=textures;
        this.pivotRate={x:0,y:0};
        this.sprites=[];
        this.spriteContainer=new PIXI.Container();
        this.addChild(this.spriteContainer);
    }
    protected updatePivotRate(){
        this.spriteContainer.pivot.set(this.spriteContainer.width*this.pivotRate.x,this.spriteContainer.height*this.pivotRate.y);
    }
    protected createSprite(index:number){
        const sprite=new PIXI.Sprite(this.textures[index]);
        return sprite;
    }
    protected createSprites(value:string|number){
        this.sprites.length=0;
        this.spriteContainer.removeChildren();
        for(let i=0,s=""+value,x=0;i<s.length;i++){
            const sprite=this.createSprite(+s[i]);
            sprite.x=x;
            this.sprites.push(sprite);
            this.spriteContainer.addChild(sprite);
            x+=this.interval;
        }
        this.updatePivotRate();
    }
    getValue(){
        return this.value;
    }
    setValue(value:string|number){
        this.value=value;
        this.createSprites(value);
    }
    setPivotRate(x=0,y=x){
        this.pivotRate.x=x,this.pivotRate.y=y;
        this.updatePivotRate();
    }
}