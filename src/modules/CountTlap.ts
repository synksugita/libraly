export function CountTlap(count:number,reaction:()=>void){
    let n=0;
    return function(){(++n>=count)&&reaction()}
}