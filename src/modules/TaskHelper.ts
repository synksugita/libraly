import * as Pixim from "@tawaship/pixim.js";
export const TaskHelper={
    taskStart(container:Pixim.Container,act:(e:Pixim.ITickerData)=>void){
        return container.task.reset().first().add(act),container;
    },
    taskStop(container:Pixim.Container){
        return container.task.reset().first(),container;
    },
    taskLimit(container:Pixim.Container,limit:number,act:(rate:number,frame:number)=>void,end:()=>void=function(){}){
        let frame=0;
        return act(0,0),this.taskStart(container,(e)=>((frame+=e.delta)<limit)?(act(frame/limit,frame)):(this.taskStop(container),act(1,limit),end()));
    },
    taskLoop(container:Pixim.Container,interval:number,act:(rate:number,isLooped:boolean)=>void){
        let frame=0;
        return act(0,!1),this.taskStart(container,(e)=>((frame+=e.delta)<interval)?(act(frame/interval,!1)):(frame-=interval,act(frame/interval,!0)));
    },
    taskSleep(container:Pixim.Container,limit:number,end:()=>void=function(){}){
        return this.taskLimit(container,limit,function(){},end);
    }
}