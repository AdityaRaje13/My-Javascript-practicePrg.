class form
{
    submit()
    {
        alert("The form is getting submitted");
    }

    cancel()
    {
        alert("The form is getting cancelled");
    }
}

let adi = new form;
let ram = new form;

adi.submit();
adi.cancel();

ram.submit();
ram.cancel();