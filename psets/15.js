/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...

function math (num1, num2) {

if (num1 > num2)
  console.log("The greater number of " + num1 + " and" + num2 + " is" + num1 );
else {
  console.log ("The greater number of " + num1 + " and" + num2 + " is " +num2);
}
}

math(4,10);
math(5,2);
