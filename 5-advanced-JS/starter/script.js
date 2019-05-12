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
// var c = 3;

// function outer() {
//     var b = 10;

//     function inner() {
//         var a = 5;
//         console.log(a+b+c);
//     }

//     return inner;
// }

// var x = outer();
// var y = outer(); 

// x();
// y();

// function interviewQuestions(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ' ' +  job);
//         } else if(job === 'teacher') {
//             console.log(name + ' ' + job);
//         } else {
//             console.log(name + ' You don\'t have a job');
//         }
//     }
// }

// interviewQuestions('teacher')('john');

/*--- Bind, Call * Apply --- */

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         }
//     }
// };
// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal', 'morning');
// john.presentation.call(emily, 'formal', 'morning');



// var john = {
//     name: 'John',
// 	salary: 30000,
//   	bonus: 5000,
//   	total: function(){
//     	console.log(this.name + ' made ' + (this.salary + this.bonus));
//     }
// }

// var emily = {
//     name: 'Emily',
// 	salary: 30000,
//   	bonus: 5500,
// }

// john.total(); //John made 35000
// john.total.call(emily); //Emily made 35500

// var person = {
//     fullName: function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
//   }
//   var person1 = {
//     firstName: "Jack",
//     lastName: "Smith"
//   }
  
// person.fullName.apply(person1);  // Will return "Jack Smith"

// //bind
// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
// johnFriendly('night');
// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');


















/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/


let questionAsked;

//Create Questions
function Question(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var question1 = new Question('Where are Liverpool in the league?', ['1st', '2nd', '3rd'], 1);
var question2 = new Question('Which player didn\'t win the golden boot?', ['Salah', 'Mane', 'Aguero'], 2);
var question3 = new Question('Which player won the golden glove?', ['Allison ', 'Ederson ', 'De Gea 🤣'], 0);

var questionsArr = [];
questionsArr.push(question1, question2, question3);

//Select Random question
function selectRandomQuestion(){
    selectedQuestionNumber = Math.floor(Math.random() * questionsArr.length);
    var selectedQuestion = questionsArr[selectedQuestionNumber];
    questionAsked = selectedQuestion;
    console.log('Question: ' + selectedQuestion['question']);
    console.log('Possible Answers: ' + selectedQuestion['answers']);
}

selectRandomQuestion();

//Prompt for answer
var userAnswer = prompt('Enter the number of the correct answer (0 - 2)');
function checkAnswer(){
    if(userAnswer == questionAsked['correctAnswer']){
        console.log('Correct! ' + questionAsked['answers'][questionAsked['correctAnswer']]);
    } else {
        console.log('Wrong');
    }
}

checkAnswer();