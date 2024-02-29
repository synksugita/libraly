export function Xorshift(n:number){
    let x=n;
    x=x^(x<<13);
    x=x^(x>>17);
    x=x^(x<<5);
    return x;
}