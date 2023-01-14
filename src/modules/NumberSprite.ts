import * as PIXI from "pixi.js";
export class NumberSprite extends PIXI.Container{
    protected interval:number;
    private value:number;
    private textures:PIXI.Texture[];
    private anchor:{x:number,y:number};
    private sprites:PIXI.Sprite[];
    private spriteContainer:PIXI.Container;
    constructor(textures:PIXI.Texture[]){
        super();

        this.interval=0;
        this.value=0;
        this.textures=textures;
        this.anchor={x:0,y:0};
        this.sprites=[];
        this.spriteContainer=new PIXI.Container();
        this.addChild(this.spriteContainer);
    }
    private updateAnchor(){
        this.spriteContainer.pivot.set(this.spriteContainer.width*this.anchor.x,this.spriteContainer.height*this.anchor.y);
    }
    private createSprite(index:number){
        const sprite=new PIXI.Sprite(this.textures[index]);
        return sprite;
    }
    private createSprites(value:number){
        this.sprites.length=0;
        this.spriteContainer.removeChildren();
        for(let i=0,s=""+value,x=0;i<s.length;i++){
            const sprite=this.createSprite(+s[i]);
            sprite.x=x;
            this.sprites.push(sprite);
            this.spriteContainer.addChild(sprite);
            x+=this.interval;
        }
        this.updateAnchor();
    }
    getValue(){
        return this.value;
    }
    setValue(value:number){
        this.value=value;
        this.createSprites(value);
    }
    setAnchor(x=0,y=x){
        this.anchor.x=x,this.anchor.y=y;
        this.updateAnchor();
    }
}