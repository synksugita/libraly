export function RandomSplice<T>(array:T[]):T{
    return array.splice(Math.floor(array.length*Math.random()),1)[0];
}