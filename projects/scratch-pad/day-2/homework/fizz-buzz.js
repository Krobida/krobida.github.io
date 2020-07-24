// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//Print numbers 1 - 100
for (var i = 1; i <= 100; i++) {
  //If numner is divisible by 3 AND 5 print "Fizzbuzz" instead of the number
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  //Else if the number is only divisible by 3 print out "Fizz"
  } else if (i % 3 === 0) {
    console.log("Fizz");
  //Else if the number is only divisible by 5 print out "Buzz"
  } else if (i % 5 === 0) { 
    console.log("Buzz");
  //Else if none of these apply just print the number!
  } else { 
    console.log(i);
  }
}
    

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}