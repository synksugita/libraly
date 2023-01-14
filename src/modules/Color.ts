export class Color{
    private _r:number;
    private _g:number;
    private _b:number;
    constructor(r:number=0,g:number=0,b:number=0){
        this._r=Color.param(r),
        this._g=Color.param(g),
        this._b=Color.param(b);
    }
    set(r:number,g:number,b:number){
        this._r=Color.param(r),
        this._g=Color.param(g),
        this._b=Color.param(b);
        return this;
    }
    copy(color:Color){
        this._r=color.r,
        this._g=color.g,
        this._b=color.b;
        return this;
    }
    inverse(){
        this._r=255-Color.param(this._r),
        this._g=255-Color.param(this._g),
        this._b=255-Color.param(this._b);
        return this;
    }
    get r(){return this._r}
    get g(){return this._g}
    get b(){return this._b}
    get c(){return 255-this._r}
    get m(){return 255-this._g}
    get y(){return 255-this._b}
    get code(){return Color.code(this.r,this.g,this.b)}
    set r(n){this._r=Color.param(n)}
    set g(n){this._g=Color.param(n)}
    set b(n){this._b=Color.param(n)}
    set c(n){this._r=255-Color.param(n)}
    set m(n){this._g=255-Color.param(n)}
    set y(n){this._b=255-Color.param(n)}
    set code(n){this.set(Color.param(n>>16),Color.param(n>>8),Color.param(n))}
    static _RGB(r:number,g:number,b:number){return {r,g,b}}
    static param(n:number){return n&255}
    static code(r:number,g:number,b:number){return (Color.param(r)<<16)|(Color.param(g)<<8)|(Color.param(b))}
    static fromCode(n:number){return new Color(n>>16,n>>8,n)}
    static fromRGB(r:number,g:number,b:number){return new Color(r,g,b)}
    static InverseCode(code:number){return 16777215-(code&16777215)}
    static AlphaBlend(back:number,front:number,alpha:number){
        function param(back:number,front:number,alpha:number){return back+(front-back)*alpha};
        const bColor=this.fromCode(back);
        const fColor=this.fromCode(front);
        const color=this._RGB(param(bColor.r,fColor.r,alpha),param(bColor.g,fColor.g,alpha),param(bColor.b,fColor.b,alpha));
        const max=Math.max(color.r,color.g,color.b);
        if(max>255){
            const mul=1/max;
            color.r=255*(color.r*mul),color.g=255*(color.g*mul),color.b=255*(color.b*mul);
        }
        return this.code(color.r,color.g,color.b);
    }
    static AddMix(codes:number[]){
        if(codes.length<=0)return 0;
        const color=this._RGB(0,0,0);
        for(let i=0;i<codes.length;i++){
            const buf=this.fromCode(codes[i]);
            color.r+=buf.r,color.g+=buf.g,color.b+=buf.b;
        }
        const mul=1/codes.length;
        return this.code(color.r*mul,color.g*mul,color.b*mul);
    }
    static SubMix(codes:number[]){
        const Codes:number[]=[];
        for(let i=0;i<codes.length;i++)Codes.push(this.InverseCode(codes[i]));
        return this.InverseCode(this.AddMix(Codes));
    }
    static AverageMix(codes:number[]){
        if(codes.length<=0)return 0;
        const color=this._RGB(0,0,0);
        for(let i=0;i<codes.length;i++){
            const buf=this.fromCode(codes[i]);
            color.r+=buf.r,color.g+=buf.g,color.b+=buf.b;
        }
        const mul=1/codes.length;
        return this.code(color.r*mul,color.g*mul,color.b*mul);
    }
    static HSV(h=0,s=1,v=1){
        let r=v,g=v,b=v;
        if(s>0){
            const H=h*6,I=Math.floor(H),F=H-I,S=1-s;
            switch(I){
                default:
                case 0:g*=S*(1-F),b*=S;break;
                case 1:r*=S*F,b*=S;break;
                case 2:r*=S,b*=S*(1-F);break;
                case 3:r*=S,g*=S*F;break;
                case 4:r*=S*(1-F),g*=S;break;
                case 5:g*=S,b*=S*F;break;
            }
        }
        return this.code(r*255,g*255,b*255);
    }
}