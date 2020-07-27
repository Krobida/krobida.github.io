/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'Kevin';
console.log(myName); // prints => Kevin

// 3. re-assignment //
myName = 'Devin';
console.log(myName); // prints => Devin

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var, let, and const // These are the three different ways we can declare a vairable
/* var keyword is function scoped and is defined throughout the entire program
 * Due to hoisting and scope, globally declared variables can cause issues with your code.
 * EC6 added the keywords let and const to adress some of these issues. Both of
 * keywords are block scoped, meaning they only have scope within their code block. */
 
 //EXAMPLE:
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);   // output: 2
}

console.log(x); // output: 2

/* let keyword declares your variable in a blocked scope rather than global/local
* optionally assigning it to a value  */

//EXAMPLE & DIFFERENCE: 

let z = 1;

if (z === 1) {
  let z = 2;

  console.log(z);  // output: 2 logged in the block scoped
}

console.log(z); // output: 1 x is changed only within the block scope
                // and this console.log is in the global scope

/* const const delcares a code scoped variable with a constant value, 
* it cannot be changed or be reinitalized. It's like a read-only file on a computer. */

//EXAMPLE:
const y = 1;

if (y === 1) {
   y = 2;

  console.log(y); // Output results in a TypeError: Assignment to constant variable
}

console.log(x);

/* Hoisting - this is the main difference between var vs let and const
* var is javascripts default behavior in moving declarations to the top
* of the program which allows a variable to be able to be used 
* before it has been declared. */
//EXAMPLE: 
var num;
console.log(num) // output is 6 because it was hoiseted to the top of the program
num = 6;  // 
