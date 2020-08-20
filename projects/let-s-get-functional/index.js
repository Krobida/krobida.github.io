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
    return _.filter(array, customer => customer.gender === "male").length
};

var femaleCount = function(array) {
//must see the reduce function to find the number of female customers
//output must be a number USE 0 as the seed to make sure it's output is a number
    return _.reduce(array, (accumulator, customer, seed) => {
        return accumulator + (customer.gender === "female");
}, 0);
};

var oldestCustomer = function(array) {
//use reduce to compare ages of customers
//reduce goes through all in array
    return _.reduce(array, (oldest, nextPerson) => {
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
//use reduce to iterate and compare the first letter in our customers name with the letter given
    return _.reduce(array, (letterCounter, nextName) => {
//if the first letter in our customers name is equal to the letter given CASE SENSITIVE
        if (nextName.name[0].toLowerCase() === letter.toLowerCase()) {
//add one to letterCounter
             letterCounter++
//return the number of names that start with that letter
        } return letterCounter
    }, 0) 
    
};

var friendFirstLetterCount = function(array, customer, letter) {
//Use the above function but on friends of the customers
//filter through out customers array and set their names to their own array
    let cust = _.filter(array, person => person.name === customer)[0];
//return our firstLetterCount function with our customers friends as the array parameter
    return firstLetterCount(cust.friends, letter);
};

var friendsCount = function(array, name) {
//create an empty array where our friends result goes
let friendsWith = []
//loop through the array of customers
for (let i = 0; i < array.length; i++) {
//loop through each customers FRIENDS object using a nested for loop
 for (let j = 0; j <array[i].friends.length; j++) {
//if the friends name for each friends index equals the name given
  if (array[i].friends[j].name === name) 
//push that name into the array given
    friendsWith.push(array[i].name);
  }
}return friendsWith
}



var topThreeTags = function(array){
//create an empty array for all of our tags to go
let tagsArray = []
//loop through our array to pull all of the tags out and put them into our tagsArray
    for (let i = 0; i < array.length; i++) {
        tagsArray.push(array[i].tags)
}
//concat all of our tags into a single array
let merge = ([].concat.apply([], tagsArray));
//use reduce to create a count of each tag in a new object called tallyTags
let tallyTags = merge.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) +1;
        return tally;
}, {}) 
//create a new variable called sortable where our sorted tags will go
var sortable = [];
//loop through our tallied tags and push them into an our array
for (var key in tallyTags){
    sortable.push([key, tallyTags[key]]);
};
//sort our tags from highest to lowest using .sort()
sortable.sort(function(a, b) {
    return b[1] - a[1];
});
// use first and map to pull out the first three tags in sortable
sortable = _.first(sortable,3)
//map will give us just the tags themselves
    return _.map(sortable, tags => tags[0])
}


var genderCount = function(array) {
//use reduce to iterate through all of our genders, starting seed should be an empty object
    return _.reduce(array, (total, customer) => {
//for every customers gender found true
    if (total[customer.gender]){
//add a count to the gender found
        total[customer.gender]++;
    } else{
//if not set it to 1
      total[customer.gender] = 1
    }  
//return the total
    return total
  }, {});
};



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
