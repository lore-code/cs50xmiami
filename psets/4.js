/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var fahrenheit = 55;
var convc = ((fahrenheit-32) *5) / 9;
var celcius = 86;
var convf = ((celcius * 9)/5) + 32;
console.log (convc + " *C is " + fahrenheit + " F");
console.log(convf + " F is " + celcius + " C")
