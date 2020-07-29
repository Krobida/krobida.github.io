// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
   //return a function with a greaterThan parameter
    return function(greaterThan) {
//Create an if else statment to test whether the given value is greater than the base
        if (greaterThan > base) {
            return true;
        } else return false;
        }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Return a function with a lessThan parameter
    return function(lessThan) {
    //If the value is less than the base return true
        if (lessThan < base) {
            return true;
    //else if the value is greater than return false
        } else return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //return a function with a string parameter
    return function (string) {
        //if the first letter of the string is the same as the lowercased startsWith argument, return true
        //lowercase any string with .toLowerCase()
        if (string[0].toLowerCase() == startsWith.toLowerCase()) {
            return true;
        } else {
            //else, return false
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //Return a function with a string parameter
    return function(string) {
    //write an if statement that tests whether the last letter of the string and endsWith are the same character
    //make sure that it's case insensitive
     if (string[string.length-1].toLowerCase() == endsWith.toLowerCase()) {
        return true;
    //else if they don't end in the same character return false
    } else {
        return false;
    }
    
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
//create an array collection
    //create a for loop to pass through each string
    for (var i = 0; i < strings.length; i++) {
    //modify the strings that went through the for loop and assign strings to it
        strings[i] = modify(strings[i]);
    //return the newly modified
    } return strings;
    
    
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
//create a for loop to go through the given strings
    for (var i = 0; i < strings.length; i++) {
//If the test doesn't pass on the strings that went through the loop return boolean FALSE
        if (test(strings[i]) === false) {
           return false;
         } 
    }
//return true if the test isn't false
    return true;
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}