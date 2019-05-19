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
// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(el) {
//     return 2016 - el;
// });

// console.log(ages5);

// // ES6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// // With multiple arguments you must wrap them in parentheses.

// ages6 = years.map((el, index) => `Age element ${index +1}: ${2016 - el}.`);
// console.log(ages6);

// // To write code across multiple lines you must use curly braces and return keyword

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}`;
// });

// console.log(ages6);

// Lecture: This keyword in arrow functions

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;

//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is the box number ' + self.position + ' and it is ' +self.color;
//             alert(str);
//         });
//     }
// }

// box5.clickMe();

// ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {

//         document.querySelector('.green').
//             addEventListener('click', () => {
//             let str = `This is the box number ${this.position} and this is it's color ${this.color}`;
//             alert(str);
//         });
//     }
// }

// box6.clickMe();

// const box62 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {

//         document.querySelector('.green').
//             addEventListener('click', () => {
//             let str = `This is the box number ${this.position} and this is it's color ${this.color}`;
//             alert(str);
//         });
//     }
// }

// box6.clickMe();

// This in functional constrcutors

// function Person(name) {
//     this.name = name;
// }

// ES5
// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el)
//     {
//         return this.name + ' is friends with ' + el
//     }.bind(this));

//     console.log(arr);
// }

// var friends = ['Rob', 'Jane', 'Mark'];

// new Person('John').myFriends5(friends);

// ES6
// Person.prototype.myFriends6 = function(friends) {
//     let arr = friends.map(el =>
//     {
//         return `${this.name} is friends with  ${el}`;
//     });

//     console.log(arr);
// }

// var friends = ['Rob', 'Jane', 'Mark'];

// new Person('John').myFriends6(friends);



// Lecture: Destructuring

// // ES5
// var john = ['John', 26];
// // var name = john[0];
// // var age = john[1];

// // ES6
// const [name, age] = ['John', 26];
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// // If you don't want variable names to match property names.
// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);

// // Practical example

// function calcRetirementAge(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = 
// calcRetirementAge(1990);
// console.log(age2);
// console.log(retirement);




//Lecture: Arrays

// const boxes = document.querySelectorAll('.box'); // Returns node list

// // ES5

// var boxesArr5 = Array.prototype.slice.call(boxes);
// // boxesArr5.forEach(function(cur) {
// //     cur.style.backgroundColor = 'dodgerblue';
// // });

// // ES6
// // Convert above node list into an array

// let boxesArr6 = Array.from(boxes); 
// boxesArr6.forEach(cur => 
//     cur.style.backgroundColor = 'dodgerblue');


// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
    
//     if(boxesArr5[i].className === 'box blue') {
//         continue;
//     }

//     boxesArr5[i].textContent = 'I changed to blue';
// }



// // ES6
// for (const cur of boxesArr6) {
//     if(cur.className.includes('blue')) {
//         continue;
//     }

//     cur.textContent = 'I changed to Dodger Blue';
// }



// // ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var full = ages.map(function(cur) {
//     return cur >= 18;
// });

// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6

// console.log(ages.findIndex(cur => cur >= 18)); //Index of true;
// console.log(ages.find(cur => cur >= 18)); //Age that is true;






/////Spread operator

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(10, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const max3 = addFourAges(...ages);
console.log(max3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Jack', 'Jackey', 'Marky'];
const bigFamily = [...familySmith, 'Ebony', ...familyMiller]; 
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

let allArr = Array.from(all); //Returns array
allArr.forEach(cur => cur.style.color = 'purple');