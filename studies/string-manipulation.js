/*
 * STRING MANIPULATION:
 *
 * 0. Strings in javascript are a very common occurence in the language and must be manipulated
 * within programs. Using built-in functions we are able to do this. The two ways to do this are by
 * operators, and various string methods. */
 
// 1. With Operators: manipulating strings with the operand "+" will concatenate strings together

//EXAMPLE:

var myExample = "This will" + " " + "be a sentence."; //concatenates the three strings together
console.log(myExample); //  output: "This will be a sentence."

// You can also use string method .concat() to do the same thing
//EXAMPLE:

var firstString = "This will"
var secondString = "be a sentence."
var fullString = firstString.concat(' ', secondString);
console.log(fullString) //  output: "This will be a sentence."

/* 2. WIth String Methods: in order to manipulate specific information within a string we must
* use built-in methods that treat strings like arrays. These methods include the following: */

// String.length // returns the length of a string
//EXAMPLE:
var fullName = "Kevin Robida";
console.log(fullName.length); // output: 12 (.length includes spaces)

// String.startsWith() && String.endsWith() // Determines if a string starts or ends with the input
//EXAMPLE:
var fullName = "Kevin Robida"
var isLastName = fullName.endsWith("Robida");
var isFirstName = fullName.startsWith("Devin")
console.log(isLastName); // output: true
console.log(isFirstName); // output: false

// String.indexOf() // This method finds which posistion the input is in said string
//EXAMPLE: 
