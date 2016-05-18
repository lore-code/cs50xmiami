/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...

function pluralize (noun, number){

var s = "s";
var results =(number + "" + noun + s)
return results
}

console.log(pluralize("cat", 5));
