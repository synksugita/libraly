export const BitHelper={
    Xorshift(n:number){
        let x=n;
        x=x^(x<<13);
        x=x^(x>>17);
        x=x^(x<<5);
        return x;
    },
    NumberOfBits(n:number){
        let x=n;
        x=(x&0x55555555)+(x>>1&0x55555555);
        x=(x&0x33333333)+(x>>2&0x33333333);
        x=(x&0x0f0f0f0f)+(x>>4&0x0f0f0f0f);
        x=(x&0x00ff00ff)+(x>>8&0x00ff00ff);
        x=(x&0x0000ffff)+(x>>16&0x0000ffff);
        return x;
    },
    OneBit(target:number,level:number,bit:number){
        return bit?target|(1<<level):target&(~(1<<level));
    }
}