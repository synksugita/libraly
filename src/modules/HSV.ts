export function convertRGB_From_HSV(h=0,s=1,v=1){
    let r=v,g=v,b=v;
    if(s>0){
        const H=h*6,I=Math.floor(H);
        switch(I){
            default:
            case 0:g*=1-s*(1-(H-I)),b*=1-s;break;
            case 1:r*=1-s*(H-I),b*=1-s;break;
            case 2:r*=1-s,b*=1-s*(1-(H-I));break;
            case 3:r*=1-s,g*=1-s*(H-I);break;
            case 4:r*=1-s*(1-(H-I)),g*=1-s;break;
            case 5:g*=1-s,b*=1-s*(H-I);break;
        }
    }
    return ((r*255)<<16)|((g*255)<<8)|((b*255)<<0);
}
export function convertHSV_From_RGB(r:number,g:number,b:number){
    let n:number;
    const max=r>g?(r>b?r:b):(g>b?g:b),min=r<g?(r<b?r:b):(g<b?g:b),sub=max-min;
    return {h:(((n=sub)>0)&&max==r?(((n=(g-b)/n)<0)&&(n+=6),n):max==g?n=2+(b-r)/n:n=4+(r-g)/n,n/6),s:max!=0?(sub)/max:sub,v:max};
}