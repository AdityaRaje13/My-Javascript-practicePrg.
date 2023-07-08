//async await functions

async function rrr()
{

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Result 1 is printed");
        },4000)
    })

    let p2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Result 2 is printed");
        },8000)
    })

    console.log("Please wait 1st result is printing");
    let a = await p1;
    console.log("The 1 st result is : "+ a);

    console.log("Please wait 2nd result is printing");
    let b = await p2;
    console.log("The 2nd result is : "+ b);

    
}
 
rrr();
