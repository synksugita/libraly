export function ConsoleButtons(actions:{[key:string]:()=>void}){
    const o:{[key:string]:()=>void}={};
    for(let i=0,keys=Object.keys(actions);i<keys.length;i++){
        const key=keys[i];
        Object.defineProperty(o,key,{
            get:function(){
                return actions[key](),Object.defineProperty({},key,{
                    get:function(){
                        return o[key];
                    }
                });
            }
        });
    }
    return o;
}