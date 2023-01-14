import * as Pixim from "@tawaship/pixim.js";
export class Stopwatch extends Pixim.Container{
    protected frameCount:number;
    constructor(){
        super();

        this.frameCount=0;
    }
    getFrameCount(){
        return this.frameCount;
    }
    play(){
        this.task.reset().first().add((e:Pixim.ITickerData)=>{
            this.frameCount+=e.delta;
            this.emit("update",e);
        });
    }
    pause(){
        this.task.reset().first();
    }
    reset(){
        this.frameCount=0;
    }
}