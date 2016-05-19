/*Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

    function drEvil(amount) {


        if (amount < 1000000)
        var result = (amount + " dollars");
        else
        result = (amount + " pinky");
        return result
      }

      console.log(drEvil(1000000));



      // write your solutio n here...
