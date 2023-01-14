export const Cookie={
    _createElement(key:string,value:string){
        return key+"="+value+";";
    },
    set(key:string,value:string,option:string[]){
        const res=this._createElement(key,value);
        const opt=(()=>{
            let str="";
            for(let i=0;i<option.length;i++){
                str+=this._createElement(""+i,option[i]);
            }
            return str;
        })();
        return document.cookie=res+opt;
    },
    get(key:string){
        const arr=document.cookie.split("; ");
        const obj:any={};
        for(let i=0;i<arr.length;i++){
            const buf=arr[i].split("=");
            obj[buf[0]]=buf[1];
        }
        return key?obj[key]:obj;
    },
    remove(key:string){
        return document.cookie=key+"=;max-age=0";
    }
}