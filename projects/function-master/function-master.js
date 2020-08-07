//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//Using Object. find the values of a given object
    return Object.values(object)
};

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//Using Object.keys find the values of the keys and turn them into a string using .join(" ")
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//Create am empty array to store new data
    let arr = []
//iterate through the objects values
    for (let i=0; i<=Object.values(object).length; i++) {
//if the typeof data inside the object is a string
        if (typeof Object.values(object)[i] === "string"){
//then push that data into our array
            arr.push(Object.values(object)[i])
        } 
//return the array created as a string using .join(" ")
    } return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
//Using .Array.isArray create an if statement that tests if the collection is one or not
    if (Array.isArray(collection)) {
//If it is an array return "array"
        return "array"
//If it is not return "object"
    }  else { return "object"
}
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
//find the first letter in the string using index of and then take the first letter off of the string using slice() method
    return string[0].toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
//split given parameter string into an array called stringArray using .split(" ") method
    let stringArray = string.split(" ");
//loop through the array of strings
        for (let i = 0; i < stringArray.length; i++) {
//for each index in the array capitilize the first letter and remove the first letter
            stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
        }
// return the result into a new string using the .join(" ") method
        return stringArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//Create a variable that holds the objects name property
    let name = object.name;
//return a message that will capitilize the name
    return "Welcome" + " " + name[0].toUpperCase() + name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//create a variable that holds the objects name property
    let name = object.name;
//create a variable that holds the objects species property
    let species = object.species;
//return which name is which species while also capitilizing them
    return name[0].toUpperCase() + name.slice(1) + " is a " + species[0].toUpperCase() + species.slice(1);
}


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//checks to see if the object has a property of noises, and if the first index of noises is defined
    if (object.noises && object.noises[0] !== undefined) {
//then return those noises as a string
        return object.noises.join(" ");
//if not then return "there are no noises"
    } else return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//find if the string includes the word using .includes() method
    if (string.includes(word)) {
//if it does, return true
        return true;
//or else return false
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//add a name to the friends key in object using .push
    object.friends.push(name)
//return the updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//using reverse logic find if the object does not include a friends property
    if (!object.friends) {
//if it doesn't return false
        return false;
//else if there is a friends property see if it includes a name using .includes() method
    } else if (object.friends.includes(name)) {
//if it has the name then return true
        return true;
//if none of these above tests pass return false
    } else {
        return false;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//Create an empty array that will hold our non-friends
    let notFriends = [];
//loop through the keys in the array
    for(let key in array) {
//if the name given does not equal a name in the array
        if (array[key].name !== name) {
//if the friends in that array includes the name given
            if (array[key].friends.includes(name)) {
//do nothing
// else if the above tests pass push the names into our notFriends array
        } else {
            notFriends.push(array[key].name)
        }
    }
//return the notFriends array
}return notFriends;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//make the objects key a new value
    object[key] = value;
//return that object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//loop through the keys in our object
    for (let key in object) {
// if the array includes an objects key
        if (array.includes(key)) {
//then delete that objects key
            delete object[key];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//Using the new Set method it will take that array and make a new set of unique values
//using the spread method [...] it will make that set into an array
    return [...new Set(array)]
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}