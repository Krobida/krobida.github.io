/*
 * OPERATORS:
 *
 * 0. Symbols or functions that express an operation and act on our data.
 * Some of these operators look like this : +, -, *, ++, --
 * 
 * 1. Operators act like functions within a program but differ in syntax
 */

/* 1. Assignment Operators : i
* i. Used to assign a value to a variable by using "="
* ii. These operators can be used as shorthand 
* iii. these operators can be used as shorthand and also to concatenate strings*/

//EXAMPLE: 1. variable declaration 2. variable name 3. assignment operator 4. value of variable
var myNum = 500;

// Assignment operators can also be used as shorthand

//EXAMPLE:
myNum += 5; // Same as (myNum = myNum + 5); value: myNum = 505
myNum -= 5; // Same as (myNum = myNum - 5); value: myNum = 495
myNum %= 5; // Same as (myNum = myNum % 5); value: myNum = 0
myNum /= 5; // Same as (myNum = myNum / 5); value: myNum = 100

// Assignment operators used to concatenate strings

//EXAMPLE:
var myExample = "This will";
myExample += "be a sentence.";
console.log(myExample); // outputs => "This will be a sentence"

/* 2. Arithmetic Operators : Used to perform arithmetic on numberical values in a program
*     + 	Addition
*     - 	Subtraction
*     * 	Multiplication
*     / 	Division
*     % 	Modulus
*    ++ 	Increment
*    -- 	Decrement
*/

// "+" sign adds
var x = 3 + 3; // output 6
// "-" sign subtracts
var x = 10 - 5; // output 5
// "*" sign multiplies
var x = 5 * 4 // output 20
// "/" sign divides
var x = 10 / 5; // output 2
// "%" sign finds remainder of
var x = 15 % 12 // output 3

// The '+' operator can also be used to concatenate strings
var myExample = "This will" + " " + "be a sentence.";
console.log(myExample); //  output: "This will be a sentence."

// Increment + Decrement
// "++" is used to increment
var x = 10;
x++; // same as x + 1;
console.log(x); // output: 11

// "--" is used to decrement
var x = 10;
x--; // same as x - 1;
console.log(x); // output: 9

// Incremet/Decrement use in For Loops
for (var x = 0; x < 10; x++) {
	console.log(x); // Each loop will count 'x' by a value of 1, (use of x++/x--)
};

/* 3. Comparison Operators : Used in logical statements in order to determine the difference
* between variables or values.
*
*     ==     Equal to
*     ===    Strictly equal
*     !=     NOT equal
*     !==    Strictly unequal
*     >      Greater than
*     <      Less than
*     >=     Greater than OR Equal to
*     <=     Less than OR Equal to
*     ?      Ternary Operator
*/
// Comparison operators can be used in conditional statements to compare values
var numOne = 50;
var numTwo = 20;

if (numOne > numTwo) {
	console.log(numOne + "is greater than " + numTwo); // output: '50 is greater than 20'
};

// Comparing two values together will have a boolean (true/false) value
14 > 8; // output: true
50 < 1; // output: false
10 !== 10; // output: false
15 <= 15; // output: true

// 4. Logical Operators : Used to determine the logic between values typically used in control-flow statements

// EXAMPLE: && (And), || (Or), !(Not)
if (20 < 100 && 100 > 25) //output is true because both are true
if (5 === 5 || 11 === 4) //output is true because one of these is true using
if (20 !== 20 || 30 !== 30)//output is false because they both equal eachother

/* 5. Unary Operators : Only requires a single operand that will operate and perform an action on it.
* These consist operators cconsist of ++ (increment), -- (decrement), ! (logical not),
* (refer to increment/decrement and use of ! above..), typeof (typeOf), and delete
* (when deleting value from an array or an object)*/

/* EXAMPLE: Use of delete:
var deleteExample = ["delete", "this"]
delete deleteExample[1] //deletes the value at index 1 of this array
console.log(deleteExample) // prints => ["delete", undefined] */

// Use of typeof:
var typeOf = true;
console.log(typeof typeOf) // prints => boolean 

/* 6. Ternary Operators : Requires the use of three operands to perform an action. Typically used
* to write shorter if/else statements with the use of "?" */

//EXAMPLE:
var myAge = 12;
var legalAge = myAge < 18 ? console.log("Too young") : console.log("Old enough"); //prints => "Too young"
// If myAge is less than 18 then print "Too young" else print "Old enough"

var myAge = 21;
var legalAge = myAge < 18 ? console.log("Too young") : console.log("Old enough"); //prints => "Old Enough"
// If myAge is less than 18 then print "Too young" else print "Old enough"