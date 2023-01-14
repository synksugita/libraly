export function BezierCurvePoint(anchorPoints:{x:number,y:number}[],rate:number):{x:number,y:number}{
    if(anchorPoints.length<=1||rate<=0)return anchorPoints[0];
    if(rate>=1)return anchorPoints[anchorPoints.length-1];
    const points:{x:number,y:number}[]=[];
    for(let i=0;i<anchorPoints.length;i++)points.push({x:anchorPoints[i].x,y:anchorPoints[i].y});
    for(let i=points.length-1;i>0;i--){
        for(let j=0;j<i;j++){
            const a=points[j],b=points[j+1];
            points[j].x=a.x+(b.x-a.x)*rate,points[j].y=a.y+(b.y-a.y)*rate;
        }
    }
    return points[0];
}