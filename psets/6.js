/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {

var slice1 = a.slice(0,2);
var slice2 = b.slice(0,2);
//var replace = slice1.replaceAt(2,b);
//var replace1 = slice2.replaceAt(2,a);
var swap1 = a.replace(b);
var swap2 = b.replace(a);
var results = (  slice2 +swap1[2]  + " , " + slice1 + swap2[2]);
return results;

}
console.log(mixUp("cat", "dog"));
