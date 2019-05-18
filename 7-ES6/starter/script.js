// Lecture: let and const


// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age = 23;
// name6 = 'Jane Miller'; // This results in a type error. You can't reassign a constant.
// console.log(name6);

// // ES5
// function driversLicence5(passedTest) {
    
//     if (passedTest) {
//         console.log(firstName);
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
    
    
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// driversLicence5(true);

// // ES6
// function driversLicence6(passedTest) {
    
//     //console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;
    
//     if (passedTest) {
//         firstName = 'John';
//     }
    
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// driversLicence6(true);

// var i = 23;

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);






// // Lecture: Blocks and IIFEs

// // ES6

// {
//     const a = 1;
//     let b = 2;
// }

// console.log(a + b); //Fails. Variables can't be acessed out of the block.

// //ES5

// (function() {
//     var c = 3;
// })();

// console.log(c);









// Lecture: Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2019 - year;
// }

// // Template Literals

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + 
// '. He was born in ' + yearOfBirth + '. Today he is ' + 
// calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

// // String Methods

// const name = `${firstName} ${lastName}`;

// console.log(name.startsWith('J'));
// console.log(name.endsWith('h'));
// console.log(name.includes(' '));
// console.log(firstName.repeat(5));







// Lecture: Arrow Functions
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});

console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

// With multiple arguments you must wrap them in parentheses.

ages6 = years.map((el, index) => `Age element ${index +1}: ${2016 - el}.`);
console.log(ages6);

// To write code across multiple lines you must use curly braces and return keyword

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`;
});

console.log(ages6);


