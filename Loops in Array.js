//LOOPS IN ARRAYS

let a = [10,12,14,16,18,20];

/*
for(let i=0; i<a.length; i++)
{
    console.log(a[i]);
}
*/

a.forEach((element) => {
    console.log(element*element)
})


for(let i of a)
{
    console.log(i);
}

for(let j in a)
{
    console.log(j);
}