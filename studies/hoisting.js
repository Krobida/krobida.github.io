/*
 * HOISTING: What is hoisting?
 * Hoisting is a process in Javascript that places a delcared variable into memory and
 * assings said variable to the value of undefined when it's created.
 */
// How are variables hoisted in JavaScript? //
// "var" Keyword: this keyword will always be hoisted to the top of the global scope
//EXAMPLE:

console.log(myName); // output => undefined
var myName = "Kevin"
console.log(myName); // output => prints "Kevin" to console

/* Behind the scenes:
* the variable 'myName' is plaved into JavaScripts memory
* the default value of 'myName' is set to undefined
* the value of 'myName' is then set to 'Kevin' */

/* "let" Keyword: let is limited when it comes to hoisting and will give a reference
* error if it is not declared and initilized in the correct order */
//EXMAPLE:

lastName = "Robida";
let lastName; // IS NOT HOISTED
console.log(lastName); // output => Cannot access 'lastName' befoere initilization
// If I used var it would have output "Robida"

// How are function declarations hoisted? How are function expressions hoisted? //
// What is the JS Interpreter //

/* "const" Keyword: this keyword must be declared and initilized on the same line
* if it's not it will produce an error. */
//EXAMPLE:

midName = "Michael";
const midName //Const keyword is not hoisted
console.log(midName);//SyntaxError: Missing initializer in const declaration

// How are function declarations hosted? //
// Function declarations are hoisted in Javascript //
//EXAMPLE:
willBeHoisted();

function willBeHoisted() { // hoists to the top
    console.log("since this function is declared, it will be hoisted")
    return;
} // output => "since this function is declared, it will be hoisted"

// How are function expressions hoisted? //
// Function expressions are not hoisted in Javascript //
//EXAMPLE:

willNotBeHoisted();

var willNotBeHoisted = function () {
    console.log("This function is written as an expression and will not be hoisted")
}; //output =>  TypeError: willNotBeHoisted is not a function.  willNotBeHoisted is undefined.


// What is the JS Interpreter? //
/* The interpreter in JavaScript is a computer that evaluates what programmers
* wrote and executes and translated the information into binary code for the
* computer to read accurately.
* JavaScript just allows the code to be written and read by a programmer, it is then
* interpreted clinet-side at browse time.
* This is important because we want to make sure our code is concise in order for
* our program to be interpretted quickly so that it loads fast and correct.