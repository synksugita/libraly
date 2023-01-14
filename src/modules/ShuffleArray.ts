export function ShuffleArray<T>(array:T[]):T[]{
    const copy=array.concat();
    for(let i=0,length=copy.length,floor=Math.floor,random=Math.random,j:number,a:T,b:T;i<length;i++){
        j=floor(length*random()),a=copy[i],b=copy[j],copy[i]=b,copy[j]=a;
    }
    return copy;
}