import * as Pixim from "@tawaship/pixim.js";
export class Timer extends Pixim.Container{
    protected frameCount:number;
    protected frameLimit:number;
    constructor(){
        super();

        this.frameCount=0;
        this.frameLimit=0;
    }
    getFrameCount(){
        return this.frameCount;
    }
    getFrameLimit(){
        return this.frameLimit;
    }
    setFrameLimit(n:number){
        this.frameLimit=n;
    }
    getRemainingFrame(){
        return this.frameLimit-this.frameCount;
    }
    play(){
        this.task.reset().first().add((e:Pixim.ITickerData)=>{
            this.frameCount+=e.delta;
            this.emit("update",e);
            if(this.frameCount>=this.frameLimit){
                this.frameCount=this.frameLimit;
                this.emit("timeup");
            }
        });
    }
    pause(){
        this.task.reset().first();
    }
    reset(){
        this.frameCount=0;
    }
}