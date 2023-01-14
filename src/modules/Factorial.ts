export function Factorial(n:number){
    let x=1;
    for(let i=2,I=Math.floor(n);i<=I;i++)x*=i;
    return x;
}