export const Complex={
    addition(a:readonly[number,number],b:readonly[number,number]):[number,number]{
        return [a[0]+b[0],a[1]+b[1]];
    },
    subtraction(a:readonly[number,number],b:readonly[number,number]):[number,number]{
        return [a[0]-b[0],a[1]-b[1]];
    },
    multiplication(a:readonly[number,number],b:readonly[number,number]):[number,number]{
        return [a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]];
    },
    devision(a:readonly[number,number],b:readonly[number,number]):[number,number]{
        const n=1/(b[0]*b[0]+b[1]*b[1]);
        return [(a[0]*b[0]+a[1]*b[1])*n,(a[1]*b[0]-a[0]*b[1])*n];
    }
}as const;