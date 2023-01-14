export function Probability(ratios:number[]){
    let total=0;
    for(let i=0;i<ratios.length;i++)total+=ratios[i];
    for(let i=0,point=Math.random()*total;i<ratios.length;i++){
        if((point-=ratios[i])<0)return i;
    }
    return ratios.length-1;
}