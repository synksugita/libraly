export function PointOfLines(rate:number,points:readonly(readonly[number,number])[]):readonly[number,number]{
    const l=points.length;
    if(l<2||rate<=0)return points[0];
    if(rate>=1)return points[l-1];
    const f=l*rate,i=Math.floor(f),r=f-i,a=points[i],b=points[i+1];
    return [a[0]+(b[0]-a[0])*r,a[1]+(b[1]-a[1])*r];
}