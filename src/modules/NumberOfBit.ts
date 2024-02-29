export function NumberOfBits(n:number){
    let x=n;
    x=x-(x>>>1&0x55555555);
    x=(x&0x33333333)+(x>>>2&0x33333333);
    x=x+(x>>>4)&0x0f0f0f0f;
    x=x*0x01010101>>>24;
    return x;
}