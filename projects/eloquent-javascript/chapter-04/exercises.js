////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, stop, step) {
//built a range function that uses a step incrementer
//start with an empty array
let results = []
//if step is less than 0 OR start is equal to stop
  if (step < 0 || start === stop) {
//return an empty array
    return results
//create a new conditional testing whether start is less than stop
  } if (start <= stop) {
//if so print the valyes starting from start to stop incrementing by step OR 1
        for(var i=start;i<=stop; i += step || 1){
//push them the results into the array
           results.push(i);
        }
//else print from stop to start incrementing by step OR 1
    } else {
        for(var i=stop;i<=start; i += step || 1) {
//push them into an array
            results.push(i);
        } 
}return results
}

//use a condition statement to 
////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  } return sum
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
let reversedArray = []
  if (array === []) {
    return reversedArray
} else {
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i])
  }
} return reversedArray;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  for (var i = 0; i <= Math.floor((arr.length - 1)) / 2; i++) {
      let el = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = el;
  }
  return arr;
}
////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
//set a new object to null
let list = null;
//iterate through the array backwards
for (let i = array.length - 1; i >= 0; i--) {
//assign the index in the array to a new key called value, and set the rest key to our list for each iteration
  list = {
    value: array[i],
    rest: list
  }
//return the list
}return list
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//NODE IS REFEREING TO EACH OBJECT IN OUR LIST
//this is taking a list of nested objects and pushing their values into an array
function listToArray(object) {
//set an empty array where our nested objects values will go
  let array = [];
//iterate after every object and push its value into our array as long as a list still exists
//after every loop it accesses the next nested object or 'rest'
 for (let node = object; node; node = node.rest) {
    array.push(node.value)
//return our array
  }return array;

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
//make sure our list is an array by setting it to a variable and calling out listToArray function on it
  let node = listToArray(list)
//add our value to the beginning of the list using unshift
  node.unshift(value);
//turn our array into a list
  node = arrayToList(node)
//return that list
  return node;
}
////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
//if list is null
  if (!list) {
//return undefined
    return undefined;
//else if num is equal to 0
  }else if (num === 0) {
//return the value of list
    return list.value
//else return the recurssed list.rest subtracting one each time
  } return nth(list.rest, num - 1)
  
}



////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
//if a, and b are objects and dont equal 'null'
 if(a !== null && b !== null && typeof a === 'object' && typeof b === 'object') {
//then loop through the properties in object a
   for(let prop in a) {
//if there is no properties in b OR properties on a arent equal to the properties in b
      if (!(prop in b) || !deepEqual(a[prop], b[prop]))
//return false
        return false;
    }
//else return true
    return true;
//if a and be are not objects test to see if they're equal and return the value
  } else {
    return a === b;
  }
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
