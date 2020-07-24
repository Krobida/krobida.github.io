// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//Create a contact object
    var contact = {
        id: id,
        nameFirst: nameFirst,
        nameLast, nameLast
    };
//return that object
    return contact;
} 

//create a makeContactList function
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
//Return an object that manages our contacts 
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //Create an addContact  where the parameter is a potential contact
        addContact: function(contact) {
        //Addd those contacts to our original contact variable
            return contacts.push(contact);
        },
        //create findContact function that takes fullName parameter
        findContact: function(fullName) {
        //iterate through the list of contacts
            for (var i = 0; i < contacts.length; i++) {
            //IF the fullName is equal to nameFirst and nameLast of our objects
                if(fullName === contacts[i].nameFirst +' '+ contacts[i].nameLast) { 
        //Then return the found contact
                    return contacts[i];
                }
            }
        },
        //Create a removeContact function with a potential contact parameter
        removeContact: function(contact) {
        //iterate through the list of contacts
            for (var i = 0; i<contacts.length; i++) {
        //if the parameter equals a name found in the loop 
                if(contact === contacts[i])
        //the remove said contact from the list
                    return contacts.splice(i, 1);
                }
            },
        //Create a orintAllContactNames function
        printAllContactNames: function() {
        //create an empty tring to hold our names
            var listNames = "";
        //iterate through the contents
                for (var i = 0; i <contacts.length; i++) {
        // if i hasnt gotten to the end of the list then print the names with a line break
                    if (i !== contacts.length - 1) {
                        listNames += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
        //else print the name on the end of the list
                    } else {
                         listNames += contacts[i].nameFirst + ' ' + contacts[i].nameLast;
       }
       }
       //return said list of names
       return listNames;
      }
    };
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
