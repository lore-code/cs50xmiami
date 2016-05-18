/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var radius = 20;
var nn = (2*3.14) * radius ;
var area = 3.14 * (radius * radius);
console.log("The circumference is " + nn );
console.log("The are is " + area);
