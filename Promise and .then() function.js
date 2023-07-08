//Promise and .then() function


let p1 = new Promise((resolve, reject) => {
       setTimeout(() => {
            console.log("value1");
       },3000)
});

p1.then((value) => {
    console.log(value);
})