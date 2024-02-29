export function CallInOrder(functions:readonly((callback:()=>void)=>void)[],callback=()=>{}){
    if(functions.length){
        let count=0;
        const next=()=>++count<functions.length?functions[count](next):callback();
        functions[count](next);
    }else callback();
}