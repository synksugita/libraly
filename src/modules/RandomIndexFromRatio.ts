export function RandomIndexFromRatio(ratio:readonly number[]){
    let total=0;
    for(let i=0;i<ratio.length;i++)total+=ratio[i];
    for(let i=0,I=ratio.length-1,point=Math.random()*total;i<I;i++)if((point-=ratio[i])<0)return i;
    return ratio.length-1;
}