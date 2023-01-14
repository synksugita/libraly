export function OmitString(string:string,from:number,length:number){
    return string.substring(0,from)+string.substring(from+length,string.length);
}