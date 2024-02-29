export function CallFunctions(functions:readonly((callback:()=>void)=>void)[],callback=()=>{}){
    if(functions.length){
        let count=0;
        const end=()=>(++count)>=functions.length&&callback();
        for(let i=0;i<functions.length;i++)functions[i](end);
    }else callback();
}