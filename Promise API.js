// Promise API


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey i am result 1");
    },2000);
})

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Hey i am result 2");
    },3000);
})

let p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Hey i am result 3");
    },4000)
})

// let prm = Promise.all([p1,p2,p3]);

// prm.then((value) => {
//     console.log(value);
// })

// let prm = Promise.allSettled([p1,p2,p3]);

// prm.then((value) => {
//     console.log(value);
// })

// let prm = Promise.race([p1,p2,p3]);

// prm.then((value) => {
//     console.log(value);
// })

// let prm = Promise.resolve([p1,p2,p3]);

// prm.then((value) => {
//     console.log(value);
// })

// let prm = Promise.reject([p1,p2,p3]);

// prm.then((value) => {
//     console.log(value);
// })