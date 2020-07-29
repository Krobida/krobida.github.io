/*
 * SCOPES: What is scoping?
 * Scoping is how the area in which our code is read. It determines where variables,
 * functions, and objects are accessible at the programs runtime. */
 
 
// What variables are bound to those scopes? //

// Different variables and the rules on how they act depending on scope
// var keyword can be declared and updated and they have FUNCTION scope
// EXAMPLE:
var name = "kevin"
var name = "james"
name = "jordan"
console.log(name) // outputs : jordan

//These are all okay to do because "var" keyword can be redclared and updated

//EXAMPLE on "var" keyword having FUNCTION scope

function varFunction(){
    var lastName = "Robida";
} 
console.log(lastName); //output => prints a reference error 
/* Since we are checking the variable lastName outside of the function we get a
& reference error because lastName is inside the function. JavaScript cannot
* find ther veriable because it is located inside the function block of code.


/* let keyword can have it's variable changed just like var but it can only be re-declared
* outside of the scope it already exists in.*/
//EXAMPLE:
let hisAge = 29;
//let hisAge = 30; THIS PRODUCES AN ERROR BECAUSE AGE HAS ALREADY BEEN DEFINED!
// BOTH WERE DECLARED IN A GLOBAL SCOPE
let herAge = 26;
herAge = 27;
console.log(herAge) // output => 27. Since the variable was UPDATED and not REDECLARED it allows us to do this.

// let keyword is block scoped so it is not contained within a function like var keyword.
//EXAMPLE:

let time = 'noon';


function test(){
    let time = 'morning';//block scoped
    console.log(time);
};
console.log(time); // output => 'noon' since it was declared in the global scope
console.log(test()); // output => 'morning' since it was declared in the test()'s blocked scope'

/* const keyword is very similar to let keyword the only difference is it is a constant
* variable so it cannot be redeclared or reassigned */
//EXAMPLE:
const myNum = 4;
// const myNum = 6; THIS PRINTS SyntaxError: Identifier 'myNum' has already been declared
myNum = 6;
console.log(myNum);// output => TypeError: Assignment to constant variable.

// What are the different scopes in JavaScript? //
// The three scopes are Global Scope, Function Scope and Block Scope
//The order goes something like this....:

// GLOBAL SCOPE ------------------------|
    //FUNCTION SCOPE -----------------| |
        // BLOCK SCOPE--------------| |
 //                                 |                                   
                                    
/*Things declared within block scope using let or const are only
* accessible when used within the same block. var allows you to reference
* outside becuase it is function scoped. Information in global scope is available
* for all to acccess and info in function scope using let and const can only be accessed
* in the same function. */