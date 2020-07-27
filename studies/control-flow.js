/*
 * CONTROL FLOW:
 *
 * 0. Control flow is the order or flow that individual statements or instructions are
 * executed and evaluated within a program. We use conditional statements in order to do
 * this as they are necessary to tell us whether a statement is true or false.
 * The four different types of conditional statements that can be used in javascript are
 * If, Else-if, Else, and Switch

/* 1. If // Uses the word if followed by a condition to evaluate true/false and execute
* code based on the condition. */
//EXAMPLE:
var num = 5;
var num2 = 6;
if (num < num2) {
    console.log("True")
}
// outputs : "True"

// 2. Else-if // is used when we want the program to give us an output if it is false also
//EXAMPLE:
var num = 7;
var num2 = 6;
if (num < num2) {
    console.log("True");
} else if (num > num2) {
    console.log("False");
}
// outputs : "False"

// 3. Else // is used when all other conditions are false and doesn't need conditionals
//EXAMPLE:
var time = 19;

if (time > 0 && time < 11) { // checks if time is between 0 and 11
    console.log("Good Morning!")
} else if (time > 11 && time < 18) { // checks if time is between 11 and 18
    console.log ("Good Afternoon!")
} else { // time isn't either of those so it will print the else statement
    console.log("Good Evening")
}

//output : "Good Evening!"

/* 4. Switch // similar to if else statements switch statements will perform different
* actions based on different conditions but with different syntax */
EXAMPLE:
var favoriteAnimal = 'dog' //prompt // prompts the user to type their facorite animal

switch(favoriteAnimal) {
    case 'dog':
            console.log("Cool! I like dogs too"); // will print if user typed 'dog'
            break; // end this case and checks the next
    case 'cat':
            console.log("Cool! I like cats too");
            break;
    case 'rabbit':
            console.log("Cool! I like dogs too");
            break;
    default: // will print if there are no matches to what the use inputs
            console.log("Sorry I dont like those types of animals")
};