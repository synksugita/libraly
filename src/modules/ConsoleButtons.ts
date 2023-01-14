export function ConsoleButtons(actions:{[key:string]:()=>void}){
    const o:{[key:string]:()=>void}={};
    for(const key in actions)Object.defineProperty(o,key,{
        get:function(){
            return actions[key](),Object.defineProperty({},key,{
                get:function(){
                    return o[key];
                }
            });
        }
    });
    return o;
}