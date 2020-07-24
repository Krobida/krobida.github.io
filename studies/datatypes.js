/*
 * DATATYPES:
 *
 * 0. Datatypes are values that allows us to operate on variables. They categorize the different
 * types of data in Javascript. Datatypes are useful because it allows computers to know how to deal
 * with the information and instructions given by the programmer.
 *
 * 1. There are 9 different datatypes in Javascript that are broken down into two categories:
 * Simple/Primitive: Number, String, Boolean, NaN, undefined, null and Complex: Object, Array,
 * and Function.
 *
 * 
 */

// 1. Number 
// a Number is a datatype represents numeric values in the program
var myNumber = 13; // prints => 13

// 2. String
// a String is a datatype that represents a sequence of characters in the program
var myString = "Hello!"; // prints => "Hello!"

// 3. Boolean
// a Boolean represents either a true or false value
var isAlive = true; // prints => true

// 4. Array
// Array is a datatype that has allows a variable to hold a list-like collection
var myArray = [23, "Kevin", true, null, "robida"]

// 5. Object
// Object is a datatype that has a collection of properties that hold key and value pairs
var coolFriends = {
    nameFirst: "Kevin",
    nameLast: "Robida",
    age: 29,
    isOld: false
}

// 6. Function
// Function is a datatype that is a block of code that the programmer designs to perform a task
// these can be called once, or multiple times throughout the program
var addFunction = function(a,b) {
   return a + b;
}

// 7. undefined 
/* undefined is a datatype that shows when a variable has not been assigned to any value
This tells us that the variable does not exist */
var isUndefined; // prints => undefined inUndefined doesn't exist

// 8. null
/*null is a datatype that expresses an intentional lack of a value. The difference between undefined
and null is that when a variable is assigned to null it DOES exist */
var isNull = null; // prints => null
//Another good example of the use of null is when logging into a webpage
//User logs into webpage...
var isSignedIn = true;
//User logs out of webpage...
var isSignedIn = null;

// 9. NaN
// This datatype translates to Not a Number which determines whether the value is a legal number or not
var a = "hello"; //this is Not a Number
isNaN(a); // => this tests whether a given property is NaN in this case it prints => false

// 10. Infinity and -Infinity
/* Infinity and -Infinity are a global variable that shows a mathematical infinity or negative infinity
There is no number greater than Infinity and there is no number less than -Infinity */
Infinity > 46345634525346; //prints => true
-Infinity < 32352523435234234; //prints => false

/* 11. Primitive/simple data types vs complex data types
*
* A primitive/simple data type are the most basic of data types which include numbers, strings, boolean
* null and undefined. These data types require very little information in order to store its value to
* memory. Primitive data types are immutable which means they can only ever return other primitive
* values and are copied by values.
*
* A complex data type hold a larger set of data which can hold a variety of different datatypes. Arrays
* Objects, and Functions are considered complex. Compelex data types are copied by reference and can have
* an indefinite size. */

/* 12. Primitive data types are copied by value which means when changing the value of one it won't 
* effect what is stored in the outcome.  */
//EXAMPLE
var a = 5;
var b = "kevin"
var x = a; // x copies value of a but is seperate from it
var y = b; // y copies valye of b but is seperate from it
console.log(a, b, x, y) // prints = > 5, "kevin", 5, "kevin"
//If you change one of these, it will not change the other
var x = 10;
console.log(a, b, x, y) // prints => 5, "kevin", 10, "kevin"
//The variabloes dont have a relationship to eachother


/*Complex data types are copied by reference which means when changing the value of one it effects
*all references within the data.*/
//EXAMPLE
var reference = [1, 4]
var copyOfRef = reference //both variables now contain references to the data

//if you alter one variable, it will change the other
reference.push(2)
console.log(copyOfRef) // will print [1, 4, 2] even though I only altered var reference

/*Here's another way to look at it.. primitive copies the exact value, and complex copies the reference
*therefore in this example: */
var a = 2
var b = 2
console.log(a === b) //returns true becuase the value is the same whereas in this example:
var a = [2, 2]
var b = [2, 2]
console.log(a === b) /* returns false because theyre distinct objects because the variables dont
*actually contain the value, but just a reference to the values*/