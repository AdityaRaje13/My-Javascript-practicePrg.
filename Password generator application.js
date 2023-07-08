class password
{

    constructor()
    {
        console.log("Welcome to password genrator");
        this.pass = "";
    }

   passwordgenerator(n)
   {
        var chars = "abcdefghijklmnopqrstuvwxyz";
        var nums = "1234567890";
        var symb= "!@#$%^&*_=+";
        let len = n;

        if(len<5)
        {
            console.log("Password must contains atleast 5 characters");
        }

        else
        {
            let i = 0;
            while(i < len)
            {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += nums[Math.floor(Math.random() * nums.length)]
                this.pass += symb[Math.floor(Math.random() * symb.length)]
                i++;     
            }
    
            this.pass = this.pass.substr(0,len);
            return this.pass;
        }
    }
}

let p = new password;

let ans = p.passwordgenerator(7);

console.log(ans);