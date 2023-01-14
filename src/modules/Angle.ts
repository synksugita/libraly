const Degree=Math.PI/180;
export const Angle={
    RadianFromDegree(degree:number){return degree*Degree},
    DegreeFromRadian(radian:number){return radian/Degree}
};