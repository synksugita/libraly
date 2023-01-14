export function StraightLinePoint(anchorPoints:{x:number,y:number}[],rate:number){
    if(anchorPoints.length<=1||rate===0)return anchorPoints[0];
    if(rate===1)return anchorPoints[anchorPoints.length-1];
    const f=anchorPoints.length*rate,i=Math.floor(f),r=f-i,a=anchorPoints[i],b=anchorPoints[i+1];
    return {x:a.x+(b.x-a.x)*r,y:a.y+(b.y-a.y)*r};
}