export function FloorNumber(value:number,borders:readonly number[]){
    for(let i=0;i<borders.length;i++)if(value<borders[i])return i;
    return borders.length;
}