/*
 * FUNCTIONS:
 *
 * 0. Functions in javascript are a self-contained routing that perfomes tasks when they're called.
 * They are basically small programs within a program that save the programmer time by not havign
 * to repete code over and over again.
 */

// 1. Two phases of the function //

// i. Declaration/definition; creating the function
//EXAMPLE:
function functionName(parameters) {
    //functions code body goes here
}
// ii. Calling or executing; using the function
//EXAMPLE:
functionName('type your parameters here');

// 2. Difference between a functions parameters and arguments passed to a function //

/* PARAMETERS in a function are the names that are listed in the functions definition
* passed by reference, these parameters are optional */
//EXAMPLE:
function doSomething(param1, param2) { // parameters that the function requires
    console.log(param1 + param2) // they are refered to inside the body of the doSomething function
}

/* ARGUMENTS are the actual values that are passed into the function and are
* passed by value instead of reference. */
//EXAMPLE:
doSomething(10, 10); //the values 10 and 10 are the arguments in the function
// Output : 20;

// 3. Syntax for a NAMED function //
function add(param1, param2){ //the name of he function is add
    return param1 + param2
}

//Functions can also be anonymous and are typically used when passed inside of functions like so:
//EXAMPLE:
function printModifiedStrings(string, modifiedString) {
    console.log(modifiedString(string)); // this tells the program that the second parameter is an anon function
}
// the anon function now gets plugged into printModifiedStrings parameter like so:
printModifiedStrings('HELLO', function(str) { return str.toLowerCase();}); //output: 'hello'

// 4. Functions can optionally take inputs and optionally return a single value. This is how those are specified: //
//EXAMPLE with inputs:
function doSomething(param1, param2) {
    return param1 + param2
}
console.log(doSomething(2, 4)) // outputs 6

//EXAMPLE without inputs and returning a single value
function doSomething() {
    return 'test';
}
console.log(doSomething()) // outputs 'test'

// 5. Scope: Functions can see and modify variables in parent or global scopes. Othe data types cannot //
/* Variables that are declared inside afunction can only be accessed inside that function and are called
* local scope. Variables declared outside a function have a global scope. Functions are unique because
* they can modify those global variables within their local function. */
//EXAMPLE:
var a = 10;

function myFunction(){
    a = 20;
    var localVar = 20;
    console.log(localVar) // outputs 20 because it's locally scoped
}
myFunction();

console.log("Value of 'a' outside the function is " + a);
// Output : "Value of 'a' outside the function is 20
// console.log(localVar) this gives a reference error because it's only defined locally inside the function



/*6. CLosures are what allow javascript to have it's own set of local variables. It gives the
*function access to the parents scope even after the parent function is closed. */
//EXAMPLE:

function doSomething() { // PARENT function
  var counter = 0; // Local variable
  return function () {counter += 1; return counter} // NESTED function can access variables 
};                                                  // in PARENT function because it hasnt closed
var add = doSomething() 
add(); // output: 1
add(); // output: 2
add(); // output: 3
add(); // output: 4

/*the variable add is assigned to our parent function which turns the variable into a function
* now we can use the variable as a function and it can access the information in the parent functions
* scope. This is what closure is, it makes it possible for a function to have private variables.
* the variables inside the local doSomething() function can only be changed by using the add() function; */

/*If we were able to just change the variables inside functions globally it could result in all
* sorts of different issues within our code, so closures are very important! */