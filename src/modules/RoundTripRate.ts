export function RoundTripRate(rate:number){
    return 2*(rate<0.5?rate:1-rate);
}