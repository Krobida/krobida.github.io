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
var myClass = "Bootcamp at operation spark"
console.log(myClass.indexOf("operation spark")) // output: 12;
 
// String.substring() // will show only part of the string based on inputs
//EXAMPLE:
var myClass = "Bootcamp at operation spark"
console.log(myClass.substring(12, 27)) // only shows the string from index 12 to 27 output: "operation spark"
 
// String.toLowerCase() & String.toUpperCase() // will force the string to either of the cases
//EXAMPLE:
var myClass = "Bootcamp at Operation Spark"
console.log(myClass.toLowerCase()) // outputs "bootcamp at operation spark"
console.log(myClass.toUpperCase()) // outputs "BOOTCAMP AT OPERATION SPARK"

// String.replace() // will find a piece of a string and replace it with a different value
//EXAMPLE:
var myClass = "Bootcamp at Operation Spark"
console.log(myClass.replace("Operation", "Camp")) // outputs: "Bootcamp at Camp Spark"

// String.toString() // - Changes the value of a variable and turns it into a string
//EXAMPLE:
var aNumber = 123;
console.log(aNumber.toString()) // outputs: "123" as a string

// String.split()  // - Used to split a string into an array of substrings
// Must put where you want the string to be split at inside the parameter
// Where you split will also be deleted
//EXAMPLE:
var myClass = "Bootcamp at operation spark"
//Split the string where there is a space by using " "
console.log(myClass.split(" ")) // outputs: [Bootcamp, at, operation, spark]

// String.trim() // - Used to trim whitespace out of the beginning and end of a string
//EXAMPLE:
var myClass = "             Bootcamp at operation spark             "
console.log(myClass.trim()) // outputs: "Bootcamp at operation spark"

// String.charAt() //  - Used to find a character at a specific index of a string
//EXAMPLE:
var myClass = "Bootcamp at operation spark"
console.log(myClass.charAt(7)) // output: p