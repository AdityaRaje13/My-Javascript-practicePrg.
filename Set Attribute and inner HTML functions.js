// Set Attribute and inner HTML functions


fun = () => {
    let a = document.createElement('div');
    console.log(a);
    a.setAttribute('id','div1');

    a.innerHTML = "<span>Hello</span>"

    let b = document.getElementById('div1');

    console.log(b);
}