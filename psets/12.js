/*
The Lifetime Supply Calculator part 2

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

// write your solution here...
function calculateSupply(age, amtperday) {

var years = 30;

var calc1 = (age * years)/365 ;
var nn = (calc1)*(amtperday);
var x = age + years

var calcsupply = ("You will need " + nn + " to last you until the ripe old age of " + x);
return calcsupply


}

console.log(calculateSupply(50,10));
