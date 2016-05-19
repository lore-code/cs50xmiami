/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...

function calculateAge(birthyear, currentyear) {
var year = new Date().getFullYear();
//console.log(currentyear);
var calcage = ("You are either" + currentyear-birthyear + " or " + (currentyear-1)-birthyear)
return calculateAge
}

console.log(calculateAge(1986,year));
console.log(calculateAge(1955,year));
console.log(calculateAge(2000,year));
