// Function Constructor

/*
var Person = function(name, yearOfBirth, job) 
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';


    1. New empty object is created.
    2. The function is called.
    3. 'this' points to the new empty object, not the global variables.
*/
/*
var andre = new Person('Andre', 1996, 'Software Engineer');
var cathal = new Person('Cathal', 1997, 'Teacher');


andre.calculateAge();
cathal.calculateAge();

console.log(andre);
console.log(andre.lastName)*/

// Object.Create

/*
    var personProto = {
        calculateAge: function() {
            console.log(2016 - this.yearOfBirth);
        }
    };

    var john = Object.create(personProto);
    john.name = 'John';
    john.yearOfBirth = 1990;
    john.job = 'teacher';

    var jane = Object.create(personProto, {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1990},
        job: {value: 'designer'}
    });
*/

// Primitives vs objects
/* Only numbers, strings, booleans, undefined, and nulls are primitives. Everything else are objects. */

// // Primitives
// console.log('----- Primitives -----');

// var a = 23;
// var b = a;
 
// // Copies a to b. Future mutations to a does not effect value of b.
// // B has it's own copy, it does not reference a.
// a = 46;

// console.log(a);
// console.log(b);



// // Objects
// console.log('----- Objects -----');

// //Variables are referenced, so if original is changed, the copy is also changed.

// var obj1 = {
//     name: 'John',
//     age: 26
// }
// var obj2 = obj1;
// obj1.age = 20;

// console.log(obj1);
// console.log(obj2);





// console.log('----- Functions -----');

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// }

// function change(a,b){
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

// /*

// OBJECT

// Pass a reference of the Object to a function. 
// When it's changed in the function, it's reflcted outside the function.

// PRIMITIVE

// When a primitive is passed, a copy of it is passed. 
// Therefore the mutation is refelcted in the function not outside.

// */







// console.log('----- PRACTISE -----');

// console.log('----- PRIMITIVE -----');

// /* PRIMITIVE */

// var a = 'Liverpool';
// var b = a;

// console.log(a, b);

// console.log('----- Objects -----');

// /* Objects */

// var liverpool = {
//     position: 2,
//     points: 94,
//     goalsFor: 87,
//     goalsAgainst: 22
// }

// function updateTable(points, obj){
//     a = 'Derby';
//     obj.points = points;
//     obj.position = 4;
// }

// liverpool.position = 1;


// console.log(liverpool)

// updateTable(97, liverpool);

// console.log(liverpool)

//PRIMITIVE = Copied. Changes are not maintain in copeies.
//Objects are referenced. Changes are changed everywhere.





//Passing functions as arguments.
// var years = [2004, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(element) {
//     return 2018 - element;
// }

// function isFullAge(element) {
//     return element >= 18;
// }

// let ages = arrayCalc(years, calculateAge);
// let fullAges = arrayCalc(ages, isFullAge);

// console.log(ages);
// console.log(fullAges);

/*--- Functions returning functions --- */

// //Create a generic function

// function interviewQuestions(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ' Can you explain what UX design is');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ' Can you explain what you teach.');
//         }
//     } else {
//         return function(name) {
//             console.log(name + ' What do you do');
//         }
//     }
// }

// //Create a variable to pass jobs into the function
// var designer = interviewQuestions('designer');
// var teacher = interviewQuestions('teacher');

// designer('Andre');
// teacher('Cathal');

/*--- Immediately Invoked Function Expressions --- */
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function (scoreDeduction) {
//     var score = Math.random() * 10;
//     console.log(score - scoreDeduction >= 5);
// })(-2);



/*--- Closures --- */

//Code camp example
var c = 3;

function outer() {
    var b = 10;

    function inner() {
        var a = 5;
        console.log(a+b+c);
    }

    return inner;
}

var x = outer();
var y = outer(); 

x();
y();

function interviewQuestions(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ' ' +  job);
        } else if(job === 'teacher') {
            console.log(name + ' ' + job);
        } else {
            console.log(name + ' You don\'t have a job');
        }
    }
}

interviewQuestions('teacher')('john');