// SPLICE AND SLICE METHOD

let a = [10,12,14,16,18,20];

a.splice(1, 4, 1,2,3,4);

console.log(a);


let b = [0,2,4,6,8,10];

let c = b.slice(3);
let d = b.slice(1,3);

console.log(c);
console.log(d);
