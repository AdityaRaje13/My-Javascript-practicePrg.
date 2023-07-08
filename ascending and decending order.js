//Ascending order

let comapre = (a,b) => {
    return a-b;
}

/*
//Descending order
let comapre = (a,b) => {
    return b-a;
}
*/

let d = [3,67,23,55,23,99,6,78,24,65,9,67,18,73];

d.sort(comapre);

console.log(d);

