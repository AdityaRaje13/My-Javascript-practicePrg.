// Guessing the number application

let num = Math.floor(Math.random() * 90 + 10);

let guess;
let score = 100;
let chance = 0;
do
{
 guess = parseInt(prompt("Enter your Guess : "));

 --score;
 ++chance;

 if(guess < num)
 {
    alert("Your guess is smaller than number");
 }

 else if(guess > num)
 {
    alert("Your guess is greater than number")
 }

 else if(guess == num)
 {
    alert("Congratulations you guessed");
    alert(`You guessed in ${chance} chanses and Your score is ${score}`);
 }

} while(guess != num)


