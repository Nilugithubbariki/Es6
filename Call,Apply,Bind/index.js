// let name = {
//     firstName : "Nilanchala",
//     lastName : "Bariki",
//     printFullName: function(){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }
// name.printFullName();


// let name2 = {
//     firstName : "Nilu",
//     lastName : "Bariki",
// }

// // Call or function borrowing

// name.printFullName.call(name2)

// //Apply

// name.printFullName.apply(name2)




//Call
var updateZipCode = function (newZip, country) {
    console.log(newZip + ' ' + country);
};
var zipCode = {
    zip: '11787'
};
updateZipCode.call(zipCode, '11888', 'us');


//Apply
// var updateZipCode = function (newZip, country) {
//     console.log(newZip + ' ' + country);
// };
// var zipCode = {
//     zip: '11787'
// };
// updateZipCode.apply(zipCode, ['11888', 'us']);


//Bind -- 
 // Create an object
const person = {
    firstName: 'John',
    lastName: 'Doe',
  };
  
  // Create a function
  function greet(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}!`);
  }
  
  // Bind the function to the person object
  const greetPerson = greet.bind(person);
  
  // Call the bound function
  greetPerson('Hello'); // Output: Hello, John Doe!