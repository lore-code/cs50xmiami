/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...
//declare global variable of current year
var cy = 2016
var by = 1986
var nn = cy-by;

var age = function (year) {
   var nn = year-by;
   console.log("They are either " + nn + " or ");

 }
  age(2015);

  console.log(nn);
