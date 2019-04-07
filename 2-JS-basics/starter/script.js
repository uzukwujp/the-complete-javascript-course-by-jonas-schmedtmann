/*
* Data Types and Varaibles
*/

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 20; 
// var fullAge = true;

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job)



/*************************
* Variable mutation and type coercion
*/;

var firstName = 'John';
var age = 28;

//Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);