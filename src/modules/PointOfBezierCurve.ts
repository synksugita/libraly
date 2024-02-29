export function PointOfBezierCurve(rate:number,points:readonly(readonly[number,number])[]):readonly[number,number]{
    const l=points.length;
    if(l<2||rate<=0)return points[0];
    if(rate>=1)return points[l-1];
    const p:[number,number][]=[];
    for(let i=0;i<l;i++)p.push([points[i][0],points[i][1]]);
    for(let i=l-1;i>0;i--)for(let j=0;j<i;j++){
        const a=p[j],b=p[j+1];
        p[j][0]=a[0]+(b[0]-a[0])*rate,p[j][1]=a[1]+(b[1]-a[1])*rate;
    }
    return p[0];
}