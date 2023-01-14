export const Ease={
    In(n:number,k:number){return Math.pow(n,k)},
    Out(n:number,k:number){return 1-Math.pow(1-n,k)},
    InOut(n:number,k:number){return (n<0.5)?Math.pow(2,k-1)*Math.pow(n,k):1-0.5*Math.pow(2-2*n,k)},
    OutIn(n:number,k:number){return (n<0.5)?0.5-0.5*Math.pow(1-2*n,k):0.5+Math.pow(2,k-1)*Math.pow(n-0.5,k)}
}