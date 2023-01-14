export function BlendVolume(from:number,to:number,ratio:number){
    return from+(to-from)*ratio;
}