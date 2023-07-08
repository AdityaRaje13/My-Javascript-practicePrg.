//async function

async function adi() 
{
      return("hello all");             // It also return the promise 
}

adi().then((value) => {
    alert(value)
})