/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...

function tellFortune(children, partner, geo, job) {

var fortune1 = [4, "Steve", "Miami", "Sales"];
var fortune2 = [2, "Jacob", "Texas", "IT"];
var fortune3 = [0. "Mario", "Star World", "Princess"];

for (var i =0; i<3; i++) {

  return("You will be a " + fortune(i+1)[3] + " in " + fortune(i+1)[2] + ", and married to " + fortune(i+1)[1] + " with " +fortune(i+1)[0] + "kids");

}

console.log(tellFortune());





}
