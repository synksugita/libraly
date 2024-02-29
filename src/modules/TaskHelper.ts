import * as Pixim from "@tawaship/pixim.js";
export const TaskHelper={
    taskStart(container:Pixim.Container,action:(e:{readonly delta:number})=>void){
        return container.task.reset().first().add(action),container;
    },
    taskStop(container:Pixim.Container){
        return container.task.reset().first(),container;
    },
    taskLimit(container:Pixim.Container,limit:number,action:(e:{readonly delta:number,readonly frame:number,readonly rate:number})=>void,end=()=>{}){
        let frame=0;const Limit=1/limit;
        return action({delta:0,frame:0,rate:0}),this.taskStart(container,(e)=>((frame+=e.delta)<limit)?(action({delta:e.delta,frame:frame,rate:frame*Limit})):(this.taskStop(container),action({delta:e.delta,frame:limit,rate:1}),end()));
    },
    taskLoop(container:Pixim.Container,interval:number,action:(e:{readonly delta:number,readonly frame:number,readonly rate:number,readonly isLooped:boolean})=>void){
        let frame=0;const Interval=1/interval;
        return action({delta:0,frame:0,rate:0,isLooped:!1}),this.taskStart(container,(e)=>((frame+=e.delta)<interval)?(action({delta:e.delta,frame:frame,rate:frame*Interval,isLooped:!1})):(frame-=interval,action({delta:e.delta,frame:frame,rate:frame*Interval,isLooped:!0})));
    },
    taskSleep(container:Pixim.Container,limit:number,end:()=>void){
        let frame=0;
        return this.taskStart(container,(e)=>((frame+=e.delta)>=limit)&&(this.taskStop(container),end()));
    }
}as const;