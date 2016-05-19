/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
//Can't figure out how to loop through different arrays...I tried fortune(i + 1)[2]...

  var fortune1 = ["4", "Steve", "Miami", "Sales"];
  var fortune2 = ["2", "Jacob", "Texas", "IT"];
  var fortune3 = ["0", "Mario", "Star World", "Princess"];


console.log ("You will be a " + fortune1[3] + " in " + fortune1[2] + " , and married to " + fortune1[1] + " with " + fortune1[0] + " kids" );
console.log ("You will be a " + fortune2[3] + " in " + fortune2[2] + " , and married to " + fortune2[1] + " with " + fortune2[0] + " kids" );
console.log ("You will be a " + fortune3[3] + " in " + fortune3[2] + " , and married to " + fortune3[1] + " with " + fortune3[0] + " kids" );
