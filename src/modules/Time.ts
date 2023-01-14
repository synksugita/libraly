export const Time={
    FrameToSecond(frame:number,FPS:number){
        return frame/FPS;
    },
    SecondToFrame(second:number,FPS:number){
        return second*FPS;
    },
    SecondToMinute(second:number){
        return second/60;
    },
    MinuteToSecond(minute:number){
        return minute*60;
    },
    MinuteToHour(minute:number){
        return minute/60;
    },
    HourToMinute(hour:number){
        return hour*60;
    }
};