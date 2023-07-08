class animal
{
    constructor(anime)
    {
        this.janwar = anime;
    }

    dance()
    {
        console.log(this.janwar + " is dancing");
    }

    jump()
    {
        console.log(this.janwar + " is jumping");
    }
}

class monkey extends animal
{
    eat()
    {
        console.log(this.janwar + " is eating");
    }
}

let animal1 = new monkey("champu");

animal1.dance();
animal1.jump();
animal1.eat();