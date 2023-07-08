//MAP, FILTER, AND REDUCE METHOD

let a = [10,12,14,16,18,20];

let b = a.map((value) => {    // map method
    return (value+1);
})

console.log(b);

//Filter method

let c = a.filter((element) => {
    return (element%4==0);
})

console.log(c);


//Reduce method

let d = a.reduce((a,b) => {
    return a+b;
})

console.log(d);