/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...


var colors = ["blue", "piano", "chocolate"];


for (var i=0; i<3; i++)
{
  var choices = i+1;
  if(i===0)
  {
    console.log ("My " + choices + "st choice is " + colors[i]);
  }

  else {
    {
      console.log ("My " + choices + "nd choice is " + colors[i]);
    }
  }

}
