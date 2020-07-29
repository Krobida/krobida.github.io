/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create animal array with array literal
var animal = {};
//use dot notation for animal property
animal.species = "Dog";
//yse bracket notation for name property
animal["name"] = "Riley";
//animal property using dot notation
animal.noises = [];
//console.log animal
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create variable array with array literal
var noises = [];
//bracket notation with index 1 to assign noise
noises[0] = "woof";
//add a noise to the end of the arrat using .push() method
noises.push("growl");
//add a noise to the beginning of the array using the .unshift()method
noises.unshift("sniff")
noises[noises.length] = "yelp"
//console.log length, last index, and the whole array
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//using bracket notation assign noises property on animal to our noises array
animal["noises"] = noises;
//used dot notation to add yip to the noises property of the animal
animal.noises.push("yip");
//console log animal
console.log(animal)

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals)
var cat = {
    species: 'cat',
    name: 'Tata',
    noises: ['meow', 'hiss', 'purr']
};
animals.push(cat);
var rabbit = {
    species: 'Leporidae',
    name: 'Smokey',
    noises: ['thump', 'purr']
};
animals.push(rabbit);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends =[];
function getRandom(array){
    return Math.floor(Math.random(array) * array.length);
}
let i = getRandom(animals);
friends.push(animals[i].name);
console.log(friends)

animals[i].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}