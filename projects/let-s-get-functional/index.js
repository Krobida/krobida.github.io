// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-krobida");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *MAKE SURE YOU'RE CD'D IN THE RIGHT FOLDER BEFORE RUNNING
 *    npm start --prefix ./krobida.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //must see the filter function to filter out the male customers
    //output must be a number
    return _.filter(array, function(customer) {
        //return a condition that resolves to be true or false based on the argument
        //test if customer object has a gender prop of male
        return customer.gender === "male";
    }).length
};

var femaleCount = function(array) {
//must see the reduce function to find the number of female customers
//output must be a number USE 0 as the seed to make sure it's output is a number
    return _.reduce(array, function(accumulator, customer, seed) {
        return accumulator + (customer.gender === "female");
}, 0);
};

var oldestCustomer = function(array) {
//find the oldest customer's name
//input: array of customers
//output: string of oldest customer's name
//use reduce to compare ages of customers
//reduce goes through all in array
    return _.reduce(array, function(oldest, nextPerson) {
//if nextPerson is older than oldest
        if (nextPerson.age > oldest.age) {
//return nextPerson (who is now oldest)
            return nextPerson;
//return oldest
        }
            return oldest
//use .name to return the name as a string
    }).name
};

var youngestCustomer = function(array) {
//use reduce to find the youngest in our customes array
    return _.reduce(array, function(youngest, nextPerson) {
//if nextPerson is younger than youngest
        if (nextPerson.age < youngest.age) {
//return nextPerson (who is now youngest)
            return nextPerson;
//return youngest
        }
            return youngest
//use .name to return the name as a string
    }).name
};

var averageBalance = function(array) {
//add the balance's together and divide them by array.length to get the average
//turn the balance into a number instead of a string
//set am empty array for our balances to go
let balances = [];
//use each to iterate through our collection and push our balances into the new array
_.each(array, function(element) {
//use parseFloat to turn our string into a number, replacing the '$' and ',' for it to work
    balances.push(parseFloat(element.balance.replace('$', '').replace(',', '')))
});
//set a new variable to hold our total balances using reduce
let totalBal = _.reduce(balances, function(total, nextNum) {
//add all of our balances together
    return total + nextNum
});
//devide the total balance by the arrays length to get the averageBalance
return totalBal / array.length 

}

var firstLetterCount = function(array, letter){
    return _.reduce(array, function(letterCounter, nextName) {
        if (nextName.name[0].toLowerCase() === letter.toLowerCase()) {
             letterCounter++
        } return letterCounter
    }, 0) 
    
};

var friendFirstLetterCount = function(array, customer, letter) {
//Use the above function but on friends of the customers
//filter through out customers array and set their names to their own array
    let cust = _.filter(array, function(person) {
        return person.name === customer;
})[0];
    return firstLetterCount(cust.friends, letter);
};

var friendsCount = function(array, name) {
//Set isFriendsWith variable to a function that will test the truthiness on if our
//customers are friends with a specific person
    let friendsWith = _.filter(array, function(person) {
//return isFriendsWith to an array that contains a 'plucked' value from a name property
        return _.contains(_.pluck(person.friends, 'name'), name);
    });
//return the pluck function by looping through our new isFriendsWith array searching through their 
//'name' property
    return _.pluck(friendsWith, 'name')
}



var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
