export function ShuffleArray<T>(array:readonly T[]):T[]{
    const copy=array.concat();
    for(let i=0,floor=Math.floor,random=Math.random,j:number,a:T,b:T;i<copy.length;i++){
        j=floor(copy.length*random()),a=copy[i],b=copy[j],copy[i]=b,copy[j]=a;
    }
    return copy;
}