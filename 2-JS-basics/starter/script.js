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

// var firstName = 'John';
// var age = 28;

// //Type Coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// //Variable mutation
// age = 'twenty eight';
// job = 'driver';

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);



/**************************
* Basic Operatprs
*/

// var now = 2018;
// var ageJohn = 28;
// var ageMark = 40


// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical Operator
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeOf Operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Test');

/**************************
* Operators Precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;


//Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average)

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++;
console.log(x);

