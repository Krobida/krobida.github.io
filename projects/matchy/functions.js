/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Implement a function called search with a parameter representing an array of animals
//And a parameter that represents a string of the name of the animal
function search (animals, name) {
//look through the animals array using a for loop
    for (let i = 0; i < animals.length; i++) {
//if one of the animals names is equal to the string provided
        if (animals[i]["name"].toLowerCase() === name.toLowerCase()) {
//then return the animals name that was found in the array
            return animals[i];
        }
    }
//if a name was entered that doesnt match anything in the array return null
 return null;
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called replace with a array parameter (animals), a string patameter (name), and a object parameter (replacement)
function replace(animals, name, replacement) {
//iterate through the array of animals that we have
    for (let i = 0; i < animals.length; i++) {
//and if an animal within that arrays name is equal to the name string provided
        if (animals[i]["name"].toLowerCase() === name.toLowerCase()) {
//take that animal off the array and replace it with the provided replacement parameter
             animals.splice([i], 1, replacement)
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called remove that has an array parameter (animals) and a string parameter (name)
function remove (animals, name) {
//iterate through the array of animals that we have
    for (let i = 0; i < animals.length; i++) {
//and if an animal within that arrays name is equal to the name string provided
        if (animals[i]["name"].toLowerCase() === name.toLowerCase()) {
//then take that animal off of the array
             animals.splice([i], 1)
        }
    }
}




//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called add that has a array parameter (anmimals) and an object parameter (animal)
function add (animals, animal) {
//if the object paramters 'name' and 'species' length is greater than 0
    if (animal["name"].length > 0 && animal["species"].length > 0)
    for (let i = 0; i < animals.length; i++) {
//and if the an animal in the array animals name is equal to the animal object
        if (animals[i]["name"].toLowerCase() === animal["name"].toLowerCase()) {
            return;
        }
//add new animal to the animals array if all statements pass
        animals.push(animal)
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
