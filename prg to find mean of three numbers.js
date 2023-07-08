/*
const marks = {
    adi : 98,
    om : 20,
    onkar : 70
}

for(let a in marks)
{
    console.log("The marks of "+a+" is "+ marks[a]);
}
*/


console.log("Program to find mean of three numbers using function");

const mean = (a,b,c) =>{
    return (a+b+c)/3;
}


console.log("The mean of 10,20,30 is "+ mean(10,20,30));