export function SafeCall(f?:Function,...args:any){
    return f?f(...args):f;
}