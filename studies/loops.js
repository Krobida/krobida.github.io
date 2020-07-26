/*
 * LOOPS:
 *
 * 0. Loops in programming are a block of code that is a set of instructions that is repeated
 * until a specific condition is met.
 *
 * 1. There are three types of loops to know in javascript, "For", "For-in", and "While" */

// 1. While, for, and for-in loops //

//i. While loops : While a specific condition is true, it wil loop through a block of code until false
//EXAMPLE:
var myNum = 3;
while(myNum > 0) {
    console.log("Alarm going off in..." + myNum);
    myNum --;
}
// Output: "Alarm going off in... 3"
//         "Alarm going off in... 2"
//         "Alarm going off in... 1"

//ii. For loops : iterates (or loops) through a block of code until a condition is met
// syntax for (var = starting condition; ending condition; what the loop executes)
//EXAMPLE:
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

//iii. For-in loops : iterates (or loops) through an objects properties
//EXAMPLE:
var myObj = {
    nameFirst : 'Kevin',
    nameLast : 'Robida',
    age : 29
}

for (var key in myObj) {
    console.log(key);
}
// Output: 'nameFirst', 'nameLast', 'age'

//Getting values EXAMPLE:
for (var value in myObj) {
    console.log(myObj[value])
}
// Output: 'Kevin', 'Robida', 29

// 2. Looping any number of times, forward counting up, backward counting down //
//You can do this my using for loops and changing the condition from ++ or --
//Counting up EXAMPLE:
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

//Counting down EXAMPLE:

for (var i = 10; i >= 0; i--) {
    console.log(i);
}
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

// 3. Looping over an Array, forwards and backwards //
//You can use for loops to iterate over arrays also
//For loop to iterate over an array forwards EXAMPLE:

var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i <= myArray.length; i++) {
    console.log(myArray[i])
}
// Output:  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

//For loop to iterate over an array backwards EXAMPLE:

var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = myArray.length-1; i >= 0; i--) {
    console.log(myArray[i])
}
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

            
// 4. Looping over an object //
//Do this by using the for-in loop as stated above...
//EXAMPLE:
var myObj = {
    nameFirst : 'Kevin',
    nameLast : 'Robida',
    age : 29
}

for (var key in myObj) {
    console.log(key);
}
// Output: 'nameFirst', 'nameLast', 'age'

//Getting values EXAMPLE:
for (var value in myObj) {
    console.log(myObj[value])
}