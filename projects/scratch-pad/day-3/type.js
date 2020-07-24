// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
//Create and if/else statement to find if the type is an array or not
//Cant use typeof for an Array so we use Array.isArray instead
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
/*There are three different instances where typeof will come out as an object that we need to eliminate
using if else, null, Array, and date*/
//If the type is an Array return false
    if (Array.isArray(value)) {
        return false;
//Else if the type is null return false
    } else if (value === null) {
        return false;
//else if the type is a Date return false
    } else if (value instanceof Date) {
        return false;
//else if the type is not an object return false
    } else if (typeof value != 'object') {
        return false;
//else return true if it is an object with a collection!
    } else {
        return true;
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)) {
        return true;
//Else if the type is null return false
    } else if (value === null) {
        return false;
//else if the type is a Date return false
    } else if (value instanceof Date) {
        return false;
//else if the type is not an object return false
    } else if (typeof value != 'object') {
        return false;
//else return true if it is an object with a collection!
    } else {
        return true;
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
//If the type is an Array return string "array"
      if (Array.isArray(value)) {
        return "array";
//Else if the type is an null return string "null"
    } else if (value === null) {
        return "null";
//Else if the type is an date return string "date"
    } else if (value instanceof Date) {
        return "date";
//Else if the type is an object return string "object"
    } else if (typeof value == 'object') {
        return "object";
//Else if the type is an string return string "string"
    } else if (typeof value == 'string') {
        return "string";
//Else if the type is undefined return string "undefined"
    } else if (typeof value == 'undefined') {
        return "undefined";
//Else if the type is a number return string "number"
    } else if (typeof value == 'number') {
        return "number";
//Else if the type is a boolean return string "boolean"
    } else if (typeof value == 'boolean') {
        return "boolean";
//Else if the type is a number return string "function"
    } else if (typeof value == 'function') {
        return "function";
    // YOUR CODE ABOVE HERE //

}
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
