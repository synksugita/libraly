export const Random={
    color(){return Math.floor(Math.random()*0x1000000)},
    float(min:number,max:number){return Math.random()*(max-min)+min},
    int(min:number,max:number){return Math.floor(Math.random()*(max-min+1)+min)},
    array(arr:any[]){return arr[Math.floor(Math.random()*arr.length)]},
    key(obj:object){return this.array(Object.keys(obj))},
    value(obj:object){return this.array(Object.values(obj))},
}